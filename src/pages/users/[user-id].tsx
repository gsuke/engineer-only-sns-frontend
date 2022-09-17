import { useRouter } from 'next/router';
import TextList from '../../components/organisms/text/TextList';
import UserProfile from '../../components/organisms/user/UserProfile';
import Template from '../../components/templates/Template';

export default function UserPage() {
  const router = useRouter();
  const userId = router.query['user-id'] ?? '';

  // slugは使わないので、userIdはstring[]ではなくstringとなる
  if (typeof userId !== 'string') {
    throw new Error('routeが不正です。');
  }

  return (
    <Template>
      <UserProfile userId={userId} />
      <TextList userId={userId} />
    </Template>
  );
}
