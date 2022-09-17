import { FaQuestion } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import useUser from '../hooks/useUser';
import Spinner from './atoms/Spinner';

type Props = {
  userId: string;
};

export default function UserName({ userId }: Props) {
  const { user, error, isLoading } = useUser(userId);

  if (error) {
    return (
      <span className="text-accent inline-flex items-center">
        <BiError className="mr-1" />
        読み込みエラー
      </span>
    );
  }

  if (isLoading) {
    return (
      <span className="text-accent inline-flex items-center">
        <Spinner className="mr-1" />
        読み込み中
      </span>
    );
  }

  if (!user?.name) {
    return (
      <span className="text-primary inline-flex items-center">
        <FaQuestion className="mr-1" />
        名無し
      </span>
    );
  }

  return <span className="text-primary inline-flex items-center">{user?.name}</span>;
}
