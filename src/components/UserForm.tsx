import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import { apiUrl } from '../lib/const';
import Modal from './Modal';
import UserEditButton from './atoms/button/floating-icon-button/UserEditButton';

export default function UserForm() {
  const [isShown, setIsShown] = useState(false);
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
        setIsShown(false);
      });
    setIsSubmitting(false);
  }

  const enterButton = (
    <>
      <FaPencilAlt className="mr-1" />
      ユーザ情報を変更する
    </>
  );

  return (
    <>
      {/* ボタン */}
      <UserEditButton
        onClick={() => {
          setIsShown(true);
        }}
      />

      <Modal
        isShown={isShown}
        setIsShown={setIsShown}
        enterButton={enterButton}
        enterButtonOnClick={async () => {
          await handleSubmit();
        }}
        enterButtonDisabled={isSubmitting}
      >
        {/* 入力エリア - 名前 */}
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

        {/* 入力エリア - 自己紹介文 */}
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
