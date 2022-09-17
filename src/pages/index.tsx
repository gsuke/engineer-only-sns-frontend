import PostModal from '../components/organisms/modal/PostModal';
import TextList from '../components/organisms/text/TextList';
import UserEditModal from '../components/organisms/modal/UserEditModal';
import Template from '../components/templates/Template';

export default function Index() {
  const floatingItems = (
    <>
      <UserEditModal />
      <PostModal />
    </>
  );

  return (
    <Template floatingItems={floatingItems}>
      <TextList />
    </Template>
  );
}
