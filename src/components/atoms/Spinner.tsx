import { VscLoading } from 'react-icons/vsc';

type Props = {
  className: string;
};

export default function Spinner({ className }: Props) {
  return <VscLoading className={`animate-spin ${className}`} />;
}
