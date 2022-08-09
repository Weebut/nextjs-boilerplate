import { ReactNode } from 'react';

interface StripProps {
  children: ReactNode;
}

export function Strip({ children }: StripProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[1024px] px-6 lg:px-0">{children}</div>
    </div>
  );
}
