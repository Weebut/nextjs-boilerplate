import { Layout } from '@components/layouts/layout.component';
import { Strip } from '@components/strips/strip.component';
import { AuthProviders } from '@libs/types/auth-providers';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface SignInContainerProps {
  providers: AuthProviders;
}

export function SignInContainer({ providers }: SignInContainerProps) {
  const router = useRouter();

  const query = router.query;

  const callbackUrl = query.callbackUrl as string;

  return (
    <Layout session={null}>
      <Strip>
        <div className="flex flex-col">
          {Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              className="rounded border p-4 hover:bg-gray-300"
            >
              <button onClick={() => signIn(provider.id, { callbackUrl })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </Strip>
    </Layout>
  );
}
