import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function PostForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ボタン */}
      <button
        type="button"
        className="btn btn-circle btn-lg btn-primary fixed right-3 bottom-3"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FaPencilAlt size={32} />
      </button>
      <input type="checkbox" id="post-modal" className="modal-toggle" checked={isOpen} />

      {/* モーダルの外側 */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(false);
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
                setIsOpen(false);
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
          />
        </button>
      </button>
    </>
  );
}
