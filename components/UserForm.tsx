import { useState } from 'react';
import { GrUserSettings } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import { apiUrl } from '../lib/const';
import FloatingButton from './FloatingButton';
import Modal from './Modal';

export default function UserForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate } = useSWRConfig();

  async function handleSubmit() {
    setIsSubmitting(true);
    type ResponseType = {
      id: string;
    };
    // TODO: 他のAPI実行ロジックもaxiosベースに置換する
    await axios
      .put<ResponseType>(
        `${apiUrl}/user/create_user`,
        { name, description },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(async (response) => {
        await mutate(`/user/${response.data.id}`);
        setShow(false);
      });
    setIsSubmitting(false);
  }

  return (
    <>
      {/* ボタン */}
      <FloatingButton
        className="bottom-3 left-3"
        onClick={() => {
          setShow(true);
        }}
      >
        <GrUserSettings size={32} />
      </FloatingButton>

      <Modal show={show} setShow={setShow}>
        {/* 上部 */}
        <div className="flex justify-between items-center mb-3">
          {/* 閉じるボタン */}
          <button
            type="button"
            className="btn btn-sm btn-circle"
            onClick={() => {
              setShow(false);
            }}
          >
            <MdClose />
          </button>

          {/* ユーザ情報変更ボタン */}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={async () => {
              await handleSubmit();
            }}
            disabled={isSubmitting}
          >
            <FaPencilAlt className="mr-1" />
            ユーザ情報を変更する
          </button>
        </div>

        {/* 入力エリア */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">名前</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">自己紹介文</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-32 resize-none"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
