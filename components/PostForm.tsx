import { ChangeEvent, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function PostForm() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <>
      {/* ボタン */}
      <button
        type="button"
        className="btn btn-circle btn-lg btn-primary fixed right-3 bottom-3"
        onClick={() => {
          setShow(true);
        }}
      >
        <FaPencilAlt size={32} />
      </button>
      <input type="checkbox" id="post-modal" className="modal-toggle" checked={show} />

      {/* モーダルの外側 */}
      <button
        type="button"
        onClick={() => {
          setShow(false);
        }}
        className="modal cursor-pointer"
      >
        {/* モーダルのメインボックス */}
        <button
          type="button"
          className="modal-box cursor-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <button
              type="button"
              className="btn btn-sm btn-circle"
              onClick={() => {
                setShow(false);
              }}
            >
              <MdClose />
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              <FaPencilAlt className="mr-1" />
              投稿
            </button>
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-32 resize-none"
            placeholder="文章を入力"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </button>
      </button>
    </>
  );
}
