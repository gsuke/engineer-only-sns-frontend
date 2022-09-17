import Container from '../components/atoms/Container';
import NavBar from '../components/molecules/NavBar';
import PostModal from '../components/organisms/modal/PostModal';
import TextList from '../components/organisms/text/TextList';
import UserEditModal from '../components/organisms/modal/UserEditModal';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <TextList />
      </Container>
      <UserEditModal />
      <PostModal />
    </div>
  );
}
