import { FaQuestion } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
import useUser from '../hooks/useUser';

type Props = {
  userId: string;
};

export default function UserName({ userId }: Props) {
  const { user, error, isLoading } = useUser(userId);

  if (error) {
    return (
      <span className="text-accent">
        <BiError className="mr-1" />
        読み込みエラー
      </span>
    );
  }

  if (isLoading) {
    return (
      <span className="text-accent">
        <VscLoading className="mr-1 animate-spin" />
        読み込み中
      </span>
    );
  }

  if (!user?.name) {
    return (
      <span className="text-primary">
        <FaQuestion className="mr-1" />
        名無し
      </span>
    );
  }

  return <span className="text-primary">{user?.name}</span>;
}
