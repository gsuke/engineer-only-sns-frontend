import type { ReactNode } from 'react';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  children: ReactNode;
};

export default function Modal({ show, setShow, children }: Props) {
  return (
    <>
      {/* 表示/非表示 を保持するチェックボックス */}
      <input
        type="checkbox"
        className="modal-toggle"
        checked={show}
        onChange={() => {
          setShow(false);
        }}
      />

      {/* モーダルの外側 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setShow(false);
        }}
        onKeyDown={() => {
          setShow(false);
        }}
        className="modal cursor-pointer"
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
