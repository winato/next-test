// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');

export default (req, res) => {
  const slug = req.query.slug;
  const evt = events.filter((event) => event.slug === slug);

  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status('405').json({ message: `${req.method} is not allowed.` });
  }
};
