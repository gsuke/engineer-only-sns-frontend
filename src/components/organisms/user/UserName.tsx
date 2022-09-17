import useUser from '../../../hooks/useUser';
import UserNameError from '../../molecules/user/UserNameError';
import UserNameLoading from '../../molecules/user/UserNameLoading';
import UserNameAnonymous from '../../molecules/user/UserNameAnonymous';
import UserNameIdentified from '../../molecules/user/UserNameIdentified';

type Props = {
  userId: string;
};

export default function UserName({ userId }: Props) {
  const { user, error, isLoading } = useUser(userId);

  if (error) {
    return <UserNameError />;
  }

  if (isLoading) {
    return <UserNameLoading />;
  }

  if (!user?.name) {
    return <UserNameAnonymous />;
  }

  return <UserNameIdentified userName={user?.name} />;
}
