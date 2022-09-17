import type { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function BaseUserName({ className, children }: Props) {
  return <span className={`inline-flex items-center ${className ?? ''}`}>{children}</span>;
}

BaseUserName.defaultProps = {
  className: '',
};
