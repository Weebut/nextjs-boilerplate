import {
  FullWidthStrip,
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Strip } from '@components/strips/strip.component';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useSession } from 'next-auth/react';
import { decrement, increment } from './reducer';
import { selectHomeValue } from './selectors';

export function HomeContainer() {
  const { data: session } = useSession();
  const value = useAppSelector(selectHomeValue);
  const dispatch = useAppDispatch();

  function onIncrease() {
    dispatch(increment());
  }

  function onDecrease() {
    dispatch(decrement());
  }

  if (!session) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        로그인이 필요한 서비스입니다!
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text text-center">
            <span className="text-xl text-white">Title</span>
            <br />
            <span className="text-white">Sub Title</span>
          </p>
        </div>
      </FullWidthStrip>
      <Strip>
        <div className="flex flex-col space-y-2 py-32">
          <div>Count : {value}</div>
          <div className="flex space-x-2">
            <button
              onClick={onIncrease}
              className="rounded border px-4 py-2 transition-colors hover:bg-gray-300"
            >
              Increase
            </button>
            <button
              onClick={onDecrease}
              className="rounded border px-4 py-2 transition-colors hover:bg-gray-300"
            >
              Decrease
            </button>
          </div>
        </div>
      </Strip>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.BLACK}>
        <div className="h-[300px]"></div>
      </FullWidthStrip>
    </div>
  );
}
