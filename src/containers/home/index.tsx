import { Layout } from '@components/layouts/layout.component';
import {
  FullWidthStrip,
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Strip } from '@components/strips/strip.component';
import { Button } from '@mui/material';
import Link from 'next/link';

export function HomeContainer() {
  return (
    <Layout>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <div className="flex flex-col items-center justify-center py-32">
          <div className="text flex flex-col space-y-3 text-center font-bold text-white">
            <div className="text-3xl ">Title</div>
            <div className="text-xl ">Sub Title</div>
          </div>
        </div>
      </FullWidthStrip>
      <Strip>
        <div className="flex h-[calc(100vh-200px)] items-center justify-center">
          <Link href={{ pathname: '/movies' }} passHref>
            <Button size="large" variant="contained" className="font-bold">
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
