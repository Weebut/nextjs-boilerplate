// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = process.env.API_BASE_URL;

export default async function handler(_: NextApiRequest, res: NextApiResponse<any>) {
  const response = await axios.post(`${baseUrl}/public`);

  res.status(200).json(response.data);
}
