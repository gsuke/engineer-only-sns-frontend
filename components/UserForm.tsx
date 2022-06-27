import { useState } from 'react';
import { GrUserSettings } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';

export default function UserForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      {/* ボタン */}
      <button
        type="button"
        className="btn btn-circle btn-lg btn-primary fixed bottom-3 left-3"
        onClick={() => {
          setShow(true);
        }}
      >
        <GrUserSettings size={32} />
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={show}
        onChange={() => {
          setShow(false);
        }}
      />

      {/* モーダルの外側 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setShow(false);
        }}
        onKeyDown={() => {
          setShow(false);
        }}
        className="modal cursor-pointer"
      >
        {/* モーダルのメインボックス */}
        <div
          role="button"
          tabIndex={0}
          className="modal-box cursor-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
        >
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

            {/* 投稿ボタン */}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {}}
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
        </div>
      </div>
    </>
  );
}
