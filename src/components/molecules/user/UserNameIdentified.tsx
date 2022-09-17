import BaseUserName from './BaseUserName';

type Props = {
  userName: string;
};

export default function UserNameIdentified({ userName }: Props) {
  return <BaseUserName className="text-primary">{userName}</BaseUserName>;
}
