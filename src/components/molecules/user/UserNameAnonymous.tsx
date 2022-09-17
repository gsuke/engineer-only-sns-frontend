import { FaQuestion } from 'react-icons/fa';
import BaseUserName from './BaseUserName';

export default function UserNameAnonymous() {
  return (
    <BaseUserName className="text-primary">
      <FaQuestion className="mr-1" />
      名無し
    </BaseUserName>
  );
}
