import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function MenuBar() {
  return (
    <nav className="bg-base-300 text-base-content flex sticky -top-0 flex-row justify-between items-center p-2 mb-1">
      <Link href="/">
        <a className="text-3xl font-bold normal-case">Engineer Only SNS</a>
      </Link>
      <a
        href="https://github.com/gsuke/engineer-only-sns-frontend"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={40} />
      </a>
    </nav>
  );
}
