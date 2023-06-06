import { getSortedPostsData } from '../../../lib/posts';

export default async (req, res) => {
  if (req.method === 'GET') {
    const posts = getSortedPostsData();
    res.status(200).json(posts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};