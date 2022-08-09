import { ReactNode } from 'react';

interface FullWidthStripProps {
  children: ReactNode;
  bgColor?: FullWidthStripBackgroundColorEnums;
}

export enum FullWidthStripBackgroundColorEnums {
  TRANSPARENT = 'transparent',
  BLACK = 'black',
  WHITE = 'white',
  PRIMARY = 'primary',
  // Add predefined colors
}

export function FullWidthStrip({
  children,
  bgColor = FullWidthStripBackgroundColorEnums.TRANSPARENT,
}: FullWidthStripProps) {
  // TODO : Reduce redundancy

  switch (bgColor) {
    case FullWidthStripBackgroundColorEnums.BLACK:
      return (
        <div className={`flex w-full justify-center bg-black`}>{children}</div>
      );
    case FullWidthStripBackgroundColorEnums.WHITE:
      return (
        <div className={`flex w-full justify-center bg-white`}>{children}</div>
      );
    case FullWidthStripBackgroundColorEnums.PRIMARY:
      return (
        <div className={`flex w-full justify-center bg-primary`}>
          {children}
        </div>
      );
    default:
      return (
        <div className={`flex w-full justify-center bg-transparent`}>
          {children}
        </div>
      );
  }
}
