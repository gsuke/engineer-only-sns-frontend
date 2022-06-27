import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';
import useTexts from '../hooks/useTexts';

export default function Home() {
  const useTextsResult = useTexts();

  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <main className="m-2 w-full max-w-xl">
          {useTextsResult.texts && <TextList texts={useTextsResult.texts} />}

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
