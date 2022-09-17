import Spinner from '../../atoms/Spinner';
import BaseUserName from './BaseUserName';

export default function UserNameLoading() {
  return (
    <BaseUserName className="text-accent">
      <Spinner className="mr-1" />
      読み込み中
    </BaseUserName>
  );
}
