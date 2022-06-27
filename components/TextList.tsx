import { useEffect } from 'react';
import TextComponent from './Text';
import useNewTexts from '../hooks/useNewTexts';
import useTexts from '../hooks/useTexts';

export default function TextList() {
  const oldTexts = useTexts();
  const newTexts = useNewTexts();

  // 新規投稿が溜まった場合は1ページに戻し、再読み込みをかける
  useEffect(() => {
    void (async () => {
      if (newTexts.isTooManyTexts) {
        await oldTexts.setSize(1);
        await oldTexts.mutate();
      }
    })();
  }, [newTexts.isTooManyTexts, oldTexts]);

  const texts = [...newTexts.texts, ...oldTexts.texts];

  // 新規投稿がある場合、textが重複して読み込まれるので、それらを除去する。
  const uniqueTexts = Array.from(
    // text.idをkeyとしたMapを作り、valuesを取ると重複を除去できる。
    new Map(texts.map((text) => [text.id, text])).values(),
  );

  return (
    <main className="m-2 w-full max-w-xl">
      {uniqueTexts.map((text) => (
        <TextComponent key={text.id} text={text} />
      ))}

      {/* もっと読み込むボタン */}
      {!oldTexts.isLoadingMore && (
        <button
          type="button"
          className="btn"
          onClick={async () => {
            await oldTexts.setSize(oldTexts.size + 1);
          }}
        >
          もっと読み込む
        </button>
      )}
    </main>
  );
}
