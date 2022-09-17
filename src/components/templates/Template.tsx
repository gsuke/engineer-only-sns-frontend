import type { ReactNode } from 'react';
import Container from '../atoms/Container';
import NavBar from '../molecules/NavBar';

type Props = {
  floatingItems?: ReactNode;
  children?: ReactNode;
};

export default function Template({ floatingItems, children }: Props) {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      {floatingItems}
    </>
  );
}
