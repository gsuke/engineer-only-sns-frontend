import type Text from '../lib/models/Text';
import TextComponent from './Text';

type Props = {
  texts: Text[];
};

export default function TextList({ texts }: Props) {
  // 新規投稿がある場合、textが重複して読み込まれるので、それらを除去する。
  const uniqueTexts = Array.from(
    // text.idをkeyとしたMapを作り、valuesを取ると重複を除去できる。
    new Map(texts.map((text) => [text.id, text])).values(),
  );

  return (
    <>
      {uniqueTexts.map((text) => (
        <TextComponent key={text.id} text={text} />
      ))}
    </>
  );
}
