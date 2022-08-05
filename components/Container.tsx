import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <main className="my-2 mx-auto w-full max-w-xl">
      <div className="mx-2">{children}</div>
    </main>
  );
}
