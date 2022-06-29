import Link from 'next/link';
import type { ReactNode } from 'react';

type UserLinkProps = {
  userId: string;
  children: ReactNode;
};

export default function UserLink({ userId, children }: UserLinkProps) {
  return (
    <Link href={`/users/${userId}`}>
      <a>{children}</a>
    </Link>
  );
}
