import { UserProfile } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { ProfileCard } from '../../components/cards/profile-card.component';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrement, increment } from './reducer';
import { selectHomeValue } from './selectors';

export interface HomeTemplateProps {
  user: UserProfile;
}

export function HomeContainer({ user }: HomeTemplateProps) {
  const value = useAppSelector(selectHomeValue);
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <ProfileCard />
      <div>
        {user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
      <div className="flex w-64 justify-center space-x-2">
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
    </div>
  );
}
