import { useRouter } from 'next/router';
import Container from '../../components/atoms/Container';
import NavBar from '../../components/molecules/NavBar';
import TextList from '../../components/organisms/text/TextList';
import UserProfile from '../../components/organisms/user/UserProfile';

export default function UserPage() {
  const router = useRouter();
  const userId = router.query['user-id'] ?? '';

  // slugは使わないので、userIdはstring[]ではなくstringとなる
  if (typeof userId !== 'string') {
    throw new Error('routeが不正です。');
  }

  return (
    <div>
      <NavBar />
      <Container>
        <UserProfile userId={userId} />
        <TextList userId={userId} />
      </Container>
    </div>
  );
}
