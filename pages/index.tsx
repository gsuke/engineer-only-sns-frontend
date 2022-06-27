import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';
import useNewTexts from '../hooks/useNewTexts';
import useTexts from '../hooks/useTexts';

export default function Home() {
  const useTextsResult = useTexts();
  const useNewTextsResult = useNewTexts(useTextsResult.texts);

  // 新規投稿が溜まった場合は1ページに戻し、再読み込みをかける
  useEffect(() => {
    void (async () => {
      if (useNewTextsResult.isTooManyTexts) {
        await useTextsResult.setSize(1);
        await useTextsResult.mutate();
      }
    })();
  }, [useNewTextsResult.isTooManyTexts, useTextsResult]);

  const allTexts = [...useNewTextsResult.texts, ...useTextsResult.texts];

  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <main className="m-2 w-full max-w-xl">
          {useTextsResult.texts && <TextList texts={allTexts} />}

          {/* もっと読み込むボタン */}
          {!useTextsResult.isLoadingMore && (
            <button
              type="button"
              className="btn"
              onClick={async () => {
                await useTextsResult.setSize(useTextsResult.size + 1);
              }}
            >
              もっと読み込む
            </button>
          )}
        </main>
      </div>
      <PostForm />
    </div>
  );
}
