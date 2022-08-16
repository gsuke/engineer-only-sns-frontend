import useSWRInfinite, { SWRInfiniteConfiguration, SWRInfiniteKeyLoader } from 'swr/infinite';
import fetcher from '../lib/fetcher';
import type Text from '../lib/models/Text';
import { textCountPerPage } from '../lib/const';

/**
 * 投稿をページ単位で取得する。
 * ※ 1ページ目を読み込んだあとに新規投稿が追加された場合
 *    - 新規投稿は取得されない
 *    - 後ろのページの読み込みで、取得される投稿が重複する
 * @param userId 投稿取得対象ユーザ。指定しない場合は全投稿を取得対象とする。
 */
export default function useOldTexts(userId?: string) {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: Text[] | null) => {
    // 最後に到達した場合
    if (previousPageData && !previousPageData.length) return null;

    // SWRキーを返却
    const skipCount = pageIndex * textCountPerPage;
    const userQuery = userId ? `&$filter=_user_id eq '${userId}'` : '';
    return `/text/all?$orderby=_created_at desc&$limit=${textCountPerPage}&$skip=${skipCount}${userQuery}`;
  };

  // 各ページは全てイミュータブルとし、新規投稿への対応は別途行う
  const option: SWRInfiniteConfiguration = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateFirstPage: false,
  };

  const { data, error, isValidating, size, setSize, mutate } = useSWRInfinite<Text[], Error>(
    getKey,
    fetcher,
    option,
  );

  // 状態を使いやすくまとめる
  const isLoadingInitialData = !data && !error;
  const isLoading =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = (data ?? []).length === 0;

  const isReachingEnd =
    isEmpty || ((data ?? [[]])[(data ?? [[]]).length - 1] ?? []).length < textCountPerPage;

  // ページ毎に区切られたtextsを平坦化する
  const texts = data?.flat() || [];

  return {
    texts,
    error,
    isValidating,
    size,
    setSize,
    mutate,
    isLoading,
    isReachingEnd,
  };
}
