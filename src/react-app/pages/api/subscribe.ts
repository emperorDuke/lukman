import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body;
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    await pool.query(
      'INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT(email) DO NOTHING',
      [email.toLowerCase()]
    );
    return res.status(200).json({ success: true, message: 'Successfully subscribed!' });
  } catch (error: any) {
    return res.status(500).json({ error: 'Failed to subscribe', details: error.message });
  }
}
