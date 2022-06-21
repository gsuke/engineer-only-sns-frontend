import Avatar from 'boring-avatars';

type Props = {
  name: string;
  id: string;
  text: string;
};

export default function Text({ name, id, text }: Props) {
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
        <div className="text-primary text-2xl">{name}</div>
        <div className="text-secondary text-xs">{id}</div>
        <p>{text}</p>
      </div>
    </article>
  );
}
