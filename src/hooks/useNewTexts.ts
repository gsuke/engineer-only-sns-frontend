import useSWR from 'swr';
import type { SWRConfiguration } from 'swr';
import fetcher from '../lib/fetcher';
import type Text from '../lib/models/Text';
import { refreshInterval, textCountPerPage } from '../lib/const';
import useOldTexts from './useOldTexts';

/**
 * useOldTextsで取得できない新規投稿を定期的に取得する。
 * @param userId 投稿取得対象ユーザ。ただし、これを指定した場合は定期取得を行わない仕様としている。
 */
export default function useNewTexts(userId?: string) {
  const oldTexts = useOldTexts();

  const config: SWRConfiguration = { refreshInterval };

  const { data, error, mutate } = useSWR<Text[], Error>(
    // ユーザページでは新規投稿を取得しない
    userId ? null : `/text/all?$orderby=_created_at desc&$limit=${textCountPerPage}`,
    fetcher,
    config,
  );

  // text.idをキーとしたMapを作る
  const newTextsMap = new Map(data?.map((text) => [text.id, text]));

  // 古い投稿と重複するものは消していく
  oldTexts.texts.forEach((oldText) => {
    newTextsMap.delete(oldText.id);
  });

  const newTexts = Array.from(newTextsMap.values());

  // 新規投稿がフェッチできる数を超えて溢れた場合に、trueになる
  const TooManyNewTextsExist = newTexts.length >= textCountPerPage;

  return {
    texts: newTexts,
    error,
    mutate,
    isLoading: !error && !data,
    TooManyNewTextsExist,
  };
}
