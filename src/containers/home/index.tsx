import { UserProfile } from '@auth0/nextjs-auth0';
import { ProfileCard } from '@components/cards/profile-card.component';
import { Modal } from '@components/modals/modal.component';
import closeAsset from '@public/assets/close.svg';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { decrement, increment } from './reducer';
import { selectHomeValue } from './selectors';

export interface HomeTemplateProps {
  user: UserProfile;
}

export function HomeContainer({ user }: HomeTemplateProps) {
  const value = useAppSelector(selectHomeValue);
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const modal = (
    <Modal
      visible={showModal}
      onClose={() => setShowModal(false)}
      maskClosable={true}
    >
      <div className="relative flex h-32 w-[480px] items-center justify-center rounded bg-white text-center">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <Image src={closeAsset} alt="close" />
        </div>
        <div className="font-gmarket">{"Hello I'm a modal"}</div>
      </div>
    </Modal>
  );

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      {modal}
      <ProfileCard />
      <div className="font-gmarket">
        {user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
      <div className="flex w-64 justify-center space-x-2 font-gmarket">
        <div>Value : {value}</div>
        <div
          className="h-6 w-12 cursor-pointer bg-red-600 text-center text-white"
          onClick={() => dispatch(increment())}
        >
          +
        </div>
        <div
          className="h-6 w-12 cursor-pointer bg-blue-600 text-center text-white"
          onClick={() => dispatch(decrement())}
        >
          -
        </div>
      </div>
      <div
        className="cursor-pointer rounded bg-black px-6 py-2 text-center text-white"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </div>
    </div>
  );
}
