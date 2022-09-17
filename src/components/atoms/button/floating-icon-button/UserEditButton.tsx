import { GrUserSettings } from 'react-icons/gr';
import BaseFloatingIconButton from './BaseFloatingIconButton';

type Props = {
  onClick: () => void;
};

export default function UserEditButton({ onClick }: Props) {
  return (
    <BaseFloatingIconButton
      className="bottom-3 left-3"
      onClick={onClick}
      icon={<GrUserSettings />}
    />
  );
}
