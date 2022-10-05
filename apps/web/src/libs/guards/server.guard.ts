import { GetServerSidePropsContext, Redirect } from 'next';
import { stringifyUrl } from 'query-string';

interface GuardResponse {
  props?: any;
  redirect?: Redirect;
}

export function ServerSideAuthGuard({
  req,
  resolvedUrl,
}: GetServerSidePropsContext): GuardResponse {
  const token = req.session.idToken;

  if (!token) {
    const destination = stringifyUrl({
      url: '/sign-in',
      query: { redirectTo: encodeURIComponent(resolvedUrl) },
    });

    return {
      redirect: { destination, permanent: false },
    };
  } else {
    return { props: { token } };
  }
}
