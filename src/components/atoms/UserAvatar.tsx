import Avatar from 'boring-avatars';

type Props = {
  userId: string;
  size: number;
};

export default function UserAvatar({ userId, size }: Props) {
  return (
    <Avatar
      size={size}
      name={userId}
      variant="beam"
      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
    />
  );
}
