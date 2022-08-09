import { Strip } from '@components/strips/strip.component';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { decrement, increment } from './reducer';
import { selectHomeValue } from './selectors';

export function HomeContainer() {
  const value = useAppSelector(selectHomeValue);
  const dispatch = useAppDispatch();

  function onIncrease() {
    dispatch(increment());
  }

  function onDecrease() {
    dispatch(decrement());
  }

  return (
    <div>
      <Strip>
        <div className="flex flex-col space-y-2">
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
    </div>
  );
}
