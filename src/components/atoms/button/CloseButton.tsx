import { MdClose } from 'react-icons/md';

type Props = {
  onClick: () => void;
};

export default function CloseButton({ onClick }: Props) {
  return (
    <button type="button" className="btn btn-sm btn-circle" onClick={onClick}>
      <MdClose />
    </button>
  );
}
