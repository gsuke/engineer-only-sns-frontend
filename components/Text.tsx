import Avatar from 'boring-avatars';
import { format, parseISO } from 'date-fns';
import type TextType from '../lib/models/Text';

type Props = {
  text: TextType;
};

export default function Text({ text }: Props) {
  const formattedDate = format(parseISO(text._created_at), 'yyyy/MM/dd HH:mm');

  return (
    <article className="bg-base-300 text-base-content flex justify-start p-2 my-2 w-full rounded-md transition duration-100">
      <div className="mr-2">
        <Avatar
          size={64}
          name={text._user_id}
          variant="beam"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      </div>
      <div className="grow">
        <div className="flex justify-between">
          {/* TODO: name を取得する */}
          <div className="text-primary text-2xl">名無し</div>
          <time>{formattedDate}</time>
        </div>

        <div className="text-secondary text-xs">{text._user_id}</div>
        <p>{text.text}</p>
      </div>
    </article>
  );
}
