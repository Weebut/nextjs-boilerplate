import { GetServerSidePropsContext, Redirect } from 'next';

interface GuardResponse {
  props?: any;
  redirect?: Redirect;
}

export async function authGuard({
  req,
  res,
}: GetServerSidePropsContext): Promise<GuardResponse> {
  const token = req.session.idToken;

  if (!token) {
    return {
      redirect: { destination: '/sign-in', permanent: false },
    };
  } else {
    return { props: { token } };
  }
}
