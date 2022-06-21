import type Text from '../lib/types/Text';
import TextComponent from './Text';

type Props = {
  texts: Text[];
};

export default function TextList({ texts }: Props) {
  return (
    <>
      {texts.map((text) => (
        <TextComponent key={text.id} name={text.name} id={text.id} text={text.text} />
      ))}
    </>
  );
}
