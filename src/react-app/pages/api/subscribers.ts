import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const result = await pool.query('SELECT id, email, created_at FROM subscribers ORDER BY created_at DESC');
    return res.status(200).json({ subscribers: result.rows });
  } catch (error: any) {
    return res.status(500).json({ error: 'Failed to fetch subscribers', details: error.message });
  }
}
