import type { ReactNode } from 'react';
import CloseButton from '../../atoms/button/CloseButton';
import ModalBox from '../../atoms/ModalBox';

type Props = {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
  enterButtonText: ReactNode;
  enterButtonOnClick: () => void;
  enterButtonDisabled: boolean;
  children: ReactNode;
};

export default function BaseModal({
  isShown,
  setIsShown,
  enterButtonText,
  enterButtonOnClick,
  enterButtonDisabled,
  children,
}: Props) {
  return (
    <ModalBox isShown={isShown} setIsShown={setIsShown}>
      {/* 上部: 閉じるボタン + 決定ボタン */}
      <div className="flex justify-between items-center mb-3">
        {/* 閉じるボタン */}
        <CloseButton
          onClick={() => {
            setIsShown(false);
          }}
        />

        {/* 決定ボタン */}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={enterButtonOnClick}
          disabled={enterButtonDisabled}
        >
          {enterButtonText}
        </button>
      </div>
      {/* メインコンテンツ */}
      {children}
    </ModalBox>
  );
}
