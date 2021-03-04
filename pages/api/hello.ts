import { NextApiRequest, NextApiResponse } from 'next'

// req = HTTP incoming message, res = HTTP server response
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const hello = req.headers['accept-language']?.startsWith('es') ? 'hola mundo!' : 'hello world!'

  const randomFact = await fetch('https://uselessfacts.jsph.pl/random.json').then(res => res.json())
  res.status(200).json({ randomFact, hello })
}
