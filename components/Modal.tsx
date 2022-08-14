import type { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  enterButton: ReactNode;
  enterButtonOnClick: () => void;
  enterButtonDisabled: boolean;
  children: ReactNode;
};

export default function Modal({
  show,
  setShow,
  enterButton,
  enterButtonOnClick,
  enterButtonDisabled,
  children,
}: Props) {
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
          {/* 上部: 閉じるボタン + 決定ボタン */}
          <div className="flex justify-between items-center mb-3">
            {/* 閉じるボタン */}
            <button
              type="button"
              className="btn btn-sm btn-circle"
              onClick={() => {
                setShow(false);
              }}
            >
              <MdClose />
            </button>

            {/* 投稿ボタン */}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={enterButtonOnClick}
              disabled={enterButtonDisabled}
            >
              {enterButton}
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
