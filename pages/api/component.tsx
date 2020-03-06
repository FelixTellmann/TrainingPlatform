const { database } = require('../../lib/database');
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = (await database.query(`SELECT * FROM navigation_dropdown`))[0];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}
