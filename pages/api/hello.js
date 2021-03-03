
// req = HTTP incoming message, res = HTTP server response

export default async function handler(req, res) {
  const response = await fetch('https://uselessfacts.jsph.pl/random.json').then(res => res.json())
  res.status(200).json({ text: 'Hello', response })
}
