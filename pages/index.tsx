import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';
import useNewTexts from '../hooks/useNewTexts';
import useTexts from '../hooks/useTexts';

export default function Home() {
  const useTextsResult = useTexts();
  const useNewTextsResult = useNewTexts(useTextsResult.texts);

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
