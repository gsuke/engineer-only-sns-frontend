import Spinner from '../atoms/Spinner';

export default function LoadingIndicator() {
  return (
    <div className="my-5 text-center">
      <p className="mb-2 text-xl">Now Loading...</p>
      <Spinner className="mb-2 text-5xl" />
      <p className="text-sm">初回読み込みの場合、時間がかかることがあります。</p>
    </div>
  );
}
