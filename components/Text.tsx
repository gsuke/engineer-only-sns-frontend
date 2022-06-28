import Avatar from 'boring-avatars';
import { format, parseISO } from 'date-fns';
import type TextType from '../lib/models/Text';
import UserAvatar from './UserAvatar';
import UserName from './UserName';

type Props = {
  text: TextType;
};

export default function Text({ text }: Props) {
  const formattedDate = format(parseISO(text._created_at), 'yyyy/MM/dd HH:mm');

  return (
    <article className="bg-base-300 text-base-content flex justify-start p-2 my-2 w-full rounded-md transition duration-100">
      <div className="mr-2">
        <UserAvatar userId={text._user_id} size={64} />
      </div>
      <div className="grow">
        <div className="flex justify-between">
          <div className="w-80 text-2xl truncate">
            <UserName userId={text._user_id} />
          </div>
          <time>{formattedDate}</time>
        </div>

        <div className="text-secondary text-xs">UserID: {text._user_id}</div>
        <p className="break-all">{text.text}</p>
      </div>
    </article>
  );
}
