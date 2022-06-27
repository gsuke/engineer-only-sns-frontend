import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';
import type Text from '../lib/models/Text';
import fetcher from '../lib/fetcher';
import { textCountPerPage } from '../lib/const';

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: Text[] | null) => {
  // 最後に到達した場合
  if (previousPageData && !previousPageData.length) return null;

  // SWRキーを返却
  const skipCount = pageIndex * textCountPerPage;
  return `/text/all?$orderby=_created_at desc&$limit=${textCountPerPage}&$skip=${skipCount}`;
};

export default function Home() {
  const swr = useSWRInfinite<Text>(getKey, fetcher, {
    // 各ページは全てイミュータブルとし、新規投稿への対応は別途行う
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateFirstPage: false,
  });

  const isLoadingInitialData = !swr.data && !swr.error;
  const isLoadingMore =
    isLoadingInitialData ||
    (swr.size > 0 && swr.data && typeof swr.data[swr.size - 1] === 'undefined');

  const texts = swr.data?.flat() || [];

  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <main className="m-2 w-full max-w-xl">
          {swr.data && <TextList texts={texts} />}

          {/* もっと読み込むボタン */}
          {!isLoadingMore && (
            <button
              type="button"
              className="btn"
              onClick={async () => {
                await swr.setSize(swr.size + 1);
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
