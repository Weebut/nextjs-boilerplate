import { UserProfile } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { ProfileCard } from '../components/cards/profile-card.component';

export interface HomeTemplateProps {
  user: UserProfile;
}

export function HomeTemplate({ user }: HomeTemplateProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <ProfileCard />
      {user ? (
        <Link href="/api/auth/logout">Logout</Link>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      )}
      <div className="flex flex-col items-start justify-start">
        <div className="text-xl">APIs</div>
        <Link href="/api/public" passHref>
          <a target={'_blank'}>
            <div>Public</div>
          </a>
        </Link>
        <Link href="/api/protected" passHref>
          <a target={'_blank'}>
            <div>Protected</div>
          </a>
        </Link>
        <Link href="/api/protected-scope" passHref>
          <a target={'_blank'}>
            <div>Protected, need authorization</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
