import Link from 'next/link';
import { useState } from 'react';

export function NavigationBar() {
  const [nickname, setNickname] = useState('Default Nickname');

  return (
    <div className="flex h-16 w-screen items-center px-6">
      <Link href="/">
        <a>
          <div>LOGO</div>
        </a>
      </Link>

      <div className="flex-auto" />
      <Link href="/my-page">
        <a>{nickname && <div>Welcome, {nickname}</div>}</a>
      </Link>
    </div>
  );
}
