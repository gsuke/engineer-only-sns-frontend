import { BiError } from 'react-icons/bi';
import BaseUserName from './BaseUserName';

export default function UserNameError() {
  return (
    <BaseUserName className="text-accent">
      <BiError className="mr-1" />
      読み込みエラー
    </BaseUserName>
  );
}
