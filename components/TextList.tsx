import type Text from '../lib/models/Text';
import TextComponent from './Text';

type Props = {
  texts: Text[];
};

export default function TextList({ texts }: Props) {
  return (
    <>
      {texts.map((text) => (
        <TextComponent key={text.id} text={text} />
      ))}
    </>
  );
}
