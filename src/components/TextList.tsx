import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TextComponent from './Text';
import useNewTexts from '../hooks/useNewTexts';
import useOldTexts from '../hooks/useOldTexts';
import { maxPage } from '../lib/const';
import LoadingIndicator from './LoadingIndicator';

type Props = {
  userId?: string;
};

export default function TextList({ userId }: Props) {
  const oldTexts = useOldTexts(userId);
  const newTexts = useNewTexts(userId);

  // 新規投稿が溜まった場合は1ページに戻し、再読み込みをかける
  useEffect(() => {
    void (async () => {
      if (newTexts.TooManyNewTextsExist) {
        await oldTexts.setSize(1);
        await oldTexts.mutate();
      }
    })();
  }, [newTexts.TooManyNewTextsExist, oldTexts]);

  async function loadNextPage() {
    if (oldTexts.isLoading) {
      return;
    }
    await oldTexts.setSize(oldTexts.size + 1);
  }

  const texts = [...newTexts.texts, ...oldTexts.texts];

  // 新規投稿がある場合、textが重複して読み込まれるので、それらを除去する。
  const uniqueTexts = Array.from(
    // text.idをkeyとしたMapを作り、valuesを取ると重複を除去できる。
    new Map(texts.map((text) => [text.id, text])).values(),
  );

  // 5ページ目以降は読み込まない
  const hasMore = !oldTexts.isReachingEnd && oldTexts.size < maxPage;

  // 1ページ目のLoading表示
  if (oldTexts.isLoading && oldTexts.size === 1) {
    return <LoadingIndicator />;
  }

  return (
    <InfiniteScroll
      dataLength={uniqueTexts.length}
      next={async () => {
        await loadNextPage();
      }}
      hasMore={hasMore}
      loader={<LoadingIndicator />}
    >
      {uniqueTexts.map((text) => (
        <TextComponent key={text.id} text={text} />
      ))}
    </InfiniteScroll>
  );
}

TextList.defaultProps = {
  userId: undefined,
};
