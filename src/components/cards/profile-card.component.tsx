import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import React from 'react';

export function ProfileCard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    (user && (
      <div className="flex flex-col text-xl">
        <div className="h-8 w-8">
          {user.picture && (
            <Image
              src={user.picture}
              alt="Profile Image"
              width={30}
              height={30}
            />
          )}
        </div>
        <span>Hello, {user.nickname}</span>
      </div>
    )) ??
    null
  );
}
