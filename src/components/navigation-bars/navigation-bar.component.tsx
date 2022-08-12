import { Session } from 'next-auth';
import Link from 'next/link';

interface NavigationBarProps {
  session: Session | null;
  signIn: () => void;
  signOut: () => void;
}

export function NavigationBar({
  session,
  signIn,
  signOut,
}: NavigationBarProps) {
  const user = session?.user;
  const isLoggedIn = !!user;

  return (
    <div className="flex h-16 w-screen items-center px-6">
      <Link href="/">
        <a>
          <div>LOGO</div>
        </a>
      </Link>

      <div className="flex-auto" />
      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <Link href="/my-page">
            <a>{isLoggedIn && <div>Welcome, {user.name}</div>}</a>
          </Link>
          <button
            onClick={() => signOut()}
            className="rounded bg-black p-2 text-white"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
