// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = process.env.API_BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const token = await getAccessToken(req, res);

  const accessToken = token.accessToken;

  const response = await axios.post(`${baseUrl}/protected`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  res.status(200).json(response.data);
}
