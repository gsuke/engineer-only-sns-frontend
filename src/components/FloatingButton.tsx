import type { ReactNode } from 'react';

type Props = {
  className: string;
  onClick: () => void;
  children: ReactNode;
};

export default function FloatingButton({ className, onClick, children }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-circle btn-lg btn-primary shadow-primary/40 fixed shadow-[0_0_20px_0px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
