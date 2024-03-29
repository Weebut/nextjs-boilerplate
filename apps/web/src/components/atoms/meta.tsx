import { MetaConfig } from '@libs/config';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface MetaProps {
  basePath: string;
  title: string;
  description: string;
  canonical?: string;
}

export function Meta({ basePath, title, description, canonical }: MetaProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          title: title,
          description: description,
          url: canonical,
          locale: MetaConfig.locale,
          site_name: MetaConfig.site_name,
        }}
      />
    </>
  );
}
