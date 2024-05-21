import { memo } from 'react';

type ModalWrapperProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
}

function ModalWrapper({className, title, children}: ModalWrapperProps) {
  return (
    <div className={`modal is-active ${className ? className : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">{title}</p>
          {children}
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const MemoizedModalWrapper = memo(ModalWrapper);

export default MemoizedModalWrapper;
