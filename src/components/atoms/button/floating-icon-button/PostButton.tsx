import { FaPencilAlt } from 'react-icons/fa';
import BaseFloatingIconButton from './BaseFloatingIconButton';

type Props = {
  onClick: () => void;
};

export default function PostButton({ onClick }: Props) {
  return (
    <BaseFloatingIconButton className="right-3 bottom-3" onClick={onClick} icon={<FaPencilAlt />} />
  );
}
