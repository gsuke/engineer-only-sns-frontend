import { useRouter } from 'next/router';
import Container from '../../components/atoms/Container';
import NavBar from '../../components/molecules/NavBar';
import TextList from '../../components/organisms/text/TextList';
import UserAvatar from '../../components/atoms/UserAvatar';
import UserName from '../../components/organisms/UserName';
import useUser from '../../hooks/useUser';

export default function UserPage() {
  const router = useRouter();

  const id = router.query['id'] ?? '';

  // slugは使わない
  if (typeof id !== 'string') {
    throw new Error('routeが不正です。');
  }

  const swr = useUser(id);

  return (
    <div>
      <NavBar />
      <Container>
        {/* ユーザプロフィール */}
        <article className="my-8 mx-2 w-full">
          <div className="flex justify-center">
            {/* 左側にアバター */}
            <div className="mr-2">
              <UserAvatar userId={id} size={64} />
            </div>
            {/* 右側に名前とUserID */}
            <div className="min-w-0">
              <div className="text-4xl truncate">
                <UserName userId={id} />
              </div>
              <div className="text-secondary text-xs">UserID: {id}</div>
            </div>
          </div>
          {/* 自己紹介文 */}
          <div className="my-2 text-center break-all">{swr.user?.description}</div>
        </article>

        <TextList userId={id} />
      </Container>
    </div>
  );
}
