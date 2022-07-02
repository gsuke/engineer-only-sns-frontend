import { ChangeEvent, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import useNewTexts from '../hooks/useNewTexts';
import { apiUrl } from '../lib/const';

export default function PostForm() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const newTexts = useNewTexts();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    await fetch(`${apiUrl}/text`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'HelloWorld',
      },
      body: JSON.stringify({ text }),
    }).then(async (response) => {
      if (response.ok) {
        await newTexts.mutate();
        setShow(false);
      }
    });
    setText('');
    setIsSubmitting(false);
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
              onClick={async () => {
                await handleSubmit();
              }}
              disabled={isSubmitting}
            >
              <FaPencilAlt className="mr-1" />
              投稿
            </button>
          </div>

          {/* 入力エリア */}
          <textarea
            className="textarea textarea-bordered w-full h-32 resize-none"
            placeholder="文章を入力"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
}
