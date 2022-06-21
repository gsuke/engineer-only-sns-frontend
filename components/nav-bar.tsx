import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function MenuBar() {
  return (
    <nav className="bg-neutral flex sticky -top-0 flex-row justify-between p-2 mb-1">
      <Link href="/">
        <a className="btn text-2xl normal-case">Engineer Only SNS</a>
      </Link>
      <a
        href="https://github.com/gsuke/engineer-only-sns-frontend"
        target="_blank"
        className="btn btn-circle"
        rel="noreferrer"
      >
        <FaGithub size={40} />
      </a>
    </nav>
  );
}
