import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useState } from 'react';
import { selectHomeValue } from './selectors';

export function HomeContainer() {
  const value = useAppSelector(selectHomeValue);
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  return <div>Hello</div>;
}
