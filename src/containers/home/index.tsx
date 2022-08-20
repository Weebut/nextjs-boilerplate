import { Layout } from '@components/layouts/layout.component';
import {
  FullWidthStrip,
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Strip } from '@components/strips/strip.component';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function HomeContainer() {
  const { data: session } = useSession();

  return (
    <Layout session={session}>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <div className="flex flex-col items-center justify-center py-32">
          <p className="text text-center">
            <span className="text-2xl text-white">Title</span>
            <br />
            <span className="text-xl text-white">Sub Title</span>
          </p>
        </div>
      </FullWidthStrip>
      <Strip>
        <div className="flex h-[calc(100vh-200px)] items-center justify-center">
          <Link href={{ pathname: '/movies' }} passHref>
            <Button size="large" variant="contained">
              Go to /movies
            </Button>
          </Link>
        </div>
      </Strip>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.BLACK}>
        <div className="flex items-center justify-center py-32">
          <span className="text-2xl font-bold text-white">
            Sign up and get your favorite movies!
          </span>
        </div>
      </FullWidthStrip>
    </Layout>
  );
}
