import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libss/server/withHandler";
import client from "@libss/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session);
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: { payload: token },
  });
  if (!exists) res.status(404).end();
  console.log(exists);
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: "9ksjgdsfld123123111fasdfasdfasdfasdfasdfasdfa",
});
