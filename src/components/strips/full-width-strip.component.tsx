import { ReactNode } from 'react';
import { Strip } from './strip.component';

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
        <div className={`w-full bg-black`}>
          <Strip>{children}</Strip>
        </div>
      );
    case FullWidthStripBackgroundColorEnums.WHITE:
      return (
        <div className={`w-full bg-white`}>
          <Strip>{children}</Strip>
        </div>
      );
    case FullWidthStripBackgroundColorEnums.PRIMARY:
      return (
        <div className={`w-full bg-primary`}>
          <Strip>{children}</Strip>
        </div>
      );
    default:
      return (
        <div className={`w-full bg-transparent`}>
          <Strip>{children}</Strip>
        </div>
      );
  }
}
