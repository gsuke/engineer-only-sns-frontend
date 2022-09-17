import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="bg-base-200/60 text-base-content shadow-base-content/20 flex sticky top-0 justify-between items-center p-2 mb-1 shadow-lg backdrop-blur-md">
      <Link href="/">
        <a className="text-3xl font-bold normal-case">Engineer Only SNS</a>
      </Link>
      <a href="https://github.com/gsuke/engineer-sns-client" target="_blank" rel="noreferrer">
        <FaGithub size={40} />
      </a>
    </nav>
  );
}
