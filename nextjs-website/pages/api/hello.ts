import { NextApiRequest, NextApiResponse } from 'next';

const helloHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Hello from the Next.js API!' });
};

export default helloHandler;