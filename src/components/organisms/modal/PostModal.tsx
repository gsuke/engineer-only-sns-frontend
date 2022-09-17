import { ChangeEvent, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import useNewTexts from '../../../hooks/useNewTexts';
import { apiUrl } from '../../../lib/const';
import PostButton from '../../atoms/button/floating-icon-button/PostButton';
import BaseModal from '../../molecules/modal/BaseModal';

export default function PostModal() {
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

  const enterButtonText = (
    <>
      <FaPencilAlt className="mr-1" />
      投稿
    </>
  );

  return (
    <>
      {/* ボタン */}
      <PostButton
        onClick={() => {
          setIsShown(true);
        }}
      />

      <BaseModal
        isShown={isShown}
        setIsShown={setIsShown}
        enterButtonText={enterButtonText}
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
      </BaseModal>
    </>
  );
}
