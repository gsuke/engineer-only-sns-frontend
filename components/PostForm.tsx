import { ChangeEvent, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import useNewTexts from '../hooks/useNewTexts';
import { apiUrl } from '../lib/const';
import FloatingButton from './FloatingButton';
import Modal from './Modal';

export default function PostForm() {
  const [isShown, setIsShown] = useState(false);
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
        setIsShown(false);
      }
    });
    setText('');
    setIsSubmitting(false);
  }

  const enterButton = (
    <>
      <FaPencilAlt className="mr-1" />
      投稿
    </>
  );

  return (
    <>
      {/* ボタン */}
      <FloatingButton
        className="right-3 bottom-3"
        onClick={() => {
          setIsShown(true);
        }}
      >
        <FaPencilAlt size={32} />
      </FloatingButton>

      <Modal
        isShown={isShown}
        setIsShown={setIsShown}
        enterButton={enterButton}
        enterButtonOnClick={async () => {
          await handleSubmit();
        }}
        enterButtonDisabled={isSubmitting}
      >
        {/* 入力エリア */}
        <textarea
          className="textarea textarea-bordered w-full h-32 resize-none"
          placeholder="文章を入力"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Modal>
    </>
  );
}
