import useUser from '../../../hooks/useUser';
import UserAvatar from '../../atoms/UserAvatar';
import UserName from './UserName';

type Props = {
  userId: string;
};

export default function UserProfile({ userId }: Props) {
  const { user } = useUser(userId);
  return (
    <article className="my-8 mx-2 w-full">
      <div className="flex justify-center">
        {/* 左側にアバター */}
        <div className="mr-2">
          <UserAvatar userId={userId} size={64} />
        </div>
        {/* 右側に名前とUserID */}
        <div className="min-w-0">
          <div className="text-4xl truncate">
            <UserName userId={userId} />
          </div>
          <div className="text-secondary text-xs">UserID: {userId}</div>
        </div>
      </div>
      {/* 自己紹介文 */}
      <div className="my-2 text-center break-all">{user?.description}</div>
    </article>
  );
}
