import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json({ status: 'ok' });
}
