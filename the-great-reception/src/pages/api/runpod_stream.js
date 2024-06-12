// pages/api/runpod_test.js
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  const { jobid } = req.query;

  if (!jobid) {
    res.status(400).json({ error: 'Job ID is required' });
    return;
  }

  const url = `https://api.runpod.ai/v2/myoxqxv0mw5osj/stream/${jobid}`;
  const apiKey = 'VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V';

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Error fetching the stream' });
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
      process.stdout.write(decoder.decode(value, { stream: true }));
    }

    res.status(200).json({ message: 'Streaming completed', result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
