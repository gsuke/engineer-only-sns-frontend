import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <main className="px-2 my-2 mx-auto w-full max-w-xl">{children}</main>;
}
