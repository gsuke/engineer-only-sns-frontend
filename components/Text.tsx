import { format, parseISO } from 'date-fns';
import type TextType from '../lib/models/Text';
import UserAvatar from './UserAvatar';
import UserLink from './UserLink';
import UserName from './UserName';

type Props = {
  text: TextType;
};

export default function Text({ text }: Props) {
  const formattedDate = format(parseISO(text._created_at), 'yyyy/MM/dd HH:mm');

  return (
    <article className="bg-base-300 text-base-content flex justify-start p-2 my-2 w-full rounded-md">
      <div className="mr-2">
        <UserLink userId={text._user_id}>
          <UserAvatar userId={text._user_id} size={64} />
        </UserLink>
      </div>
      <div className="grow">
        <div className="flex justify-between">
          <div className="text-lg truncate">
            <UserLink userId={text._user_id}>
              <UserName userId={text._user_id} />
            </UserLink>
          </div>
          <time className="text-sm">{formattedDate}</time>
        </div>

        <div className="text-secondary text-xs">UserID: {text._user_id}</div>
        <p className="break-all">{text.text}</p>
      </div>
    </article>
  );
}
