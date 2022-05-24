import dynamic from 'next/dynamic';
import { BaseSyntheticEvent, ReactNode } from 'react';

const Portal = dynamic(() => import('@components/portal/portal.component'), {
  ssr: false,
});

interface ModalProps {
  visible: boolean;
  onClose: (event: any) => void;
  maskClosable?: boolean;
  closable?: boolean;
  children?: ReactNode;
}

export function Modal({
  visible,
  onClose,
  maskClosable,
  closable,
  children,
}: ModalProps) {
  function onMaskClick(event: BaseSyntheticEvent) {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  }

  if (visible) {
    return (
      <Portal elementId="modal-root">
        <div
          tabIndex={-1}
          className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-30"
          onClick={maskClosable ? onMaskClick : () => null}
        >
          <div
            tabIndex={0}
            className="w-sm max-w flex max-w-lg items-center justify-center"
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  } else {
    return null;
  }
}
