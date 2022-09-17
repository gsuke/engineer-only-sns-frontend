import type { ReactNode } from 'react';

type Props = {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
  children: ReactNode;
};

export default function ModalBox({ isShown, setIsShown, children }: Props) {
  return (
    <>
      {/* 表示/非表示 を保持するチェックボックス */}
      <input
        type="checkbox"
        className="modal-toggle"
        checked={isShown}
        onChange={() => {
          setIsShown(false);
        }}
      />

      {/* モーダルの外側 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setIsShown(false);
        }}
        onKeyDown={() => {
          setIsShown(false);
        }}
        className="modal backdrop-blur-sm cursor-pointer"
      >
        {/* モーダルのメインボックス */}
        <div
          role="button"
          tabIndex={0}
          className="modal-box cursor-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
