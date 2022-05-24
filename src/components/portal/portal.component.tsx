import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  elementId: string;
}

export default function Portal({ children, elementId }: PortalProps) {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId],
  );

  if (rootElement) {
    return createPortal(children, rootElement);
  } else {
    return null;
  }
}
