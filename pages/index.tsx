import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';
import UserForm from '../components/UserForm';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <TextList />
      </div>
      <UserForm />
      <PostForm />
    </div>
  );
}
