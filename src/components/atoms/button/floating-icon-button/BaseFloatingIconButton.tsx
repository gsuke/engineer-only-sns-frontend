import type { ReactElement } from 'react';

type Props = {
  className: string;
  onClick: () => void;
  icon: ReactElement;
};

export default function BaseFloatingIconButton({ className, onClick, icon }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-circle btn-lg btn-primary shadow-primary/40 fixed shadow-[0_0_20px_0px] text-3xl ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
