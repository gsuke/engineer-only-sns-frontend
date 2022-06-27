import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import TextList from '../components/TextList';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <TextList />
      </div>
      <PostForm />
    </div>
  );
}
