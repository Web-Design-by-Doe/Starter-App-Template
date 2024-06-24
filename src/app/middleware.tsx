import { NextApiRequest, NextApiResponse } from "next";

export default function middleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  // Do something with the request
  console.log("Request to", req.url);

  // Call next() to pass the request
  next();
}
