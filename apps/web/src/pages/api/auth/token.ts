import { withSessionRoute } from '@libs/iron-session/iron-session';
import { isProduction } from '@libs/utils/environment';
import type { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(
  async (req: NextApiRequest, res: NextApiResponse<any>) => {
    if (!isProduction()) {
      const token = req.session.idToken;

      if (!token) {
        res.status(401).end();
      }

      res.status(200).send(token);
    } else {
      res.status(404).end();
    }
  },
);
