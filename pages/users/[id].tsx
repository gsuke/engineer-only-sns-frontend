import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import TextList from '../../components/TextList';

export default function UserPage() {
  const router = useRouter();
  const id = router.query['id'] ?? '';

  // slugは使わない
  if (typeof id !== 'string') {
    throw new Error('routeが不正です。');
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <TextList userId={id} />
      </div>
    </div>
  );
}
