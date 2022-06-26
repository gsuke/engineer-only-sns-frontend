import Avatar from 'boring-avatars';
import type Props from '../lib/types/Text';

export default function Text({ id, text }: Props) {
  return (
    <article className="bg-base-300 text-base-content flex justify-start p-2 my-2 w-full rounded-md transition duration-100">
      <div className="mr-2">
        <Avatar
          size={64}
          name={id}
          variant="beam"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      </div>
      <div>
        {/* TODO: name を取得する */}
        <div className="text-primary text-2xl">名無し</div>
        <div className="text-secondary text-xs">{id}</div>
        <p>{text}</p>
      </div>
    </article>
  );
}
