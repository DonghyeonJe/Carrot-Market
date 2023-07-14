import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libss/server/withHandler";
import client from "@libss/server/client";
import twilio from "twilio";
import smtpTransport from "@libss/server/email";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  //만약 user가 null이면 res.json 리턴
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 90000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
            // es6 문법 if else 대신에 사용가능
            // ...(phone ? { phone: +phone } : {}),
            // ...(email ? { email } : {}),
          },
          create: {
            name: "익명",
            ...user,

            // ...(phone ? { phone: +phone } : {}),
            // ...(email ? { email } : {}),
          },
        },
      },
    },
  });
  console.log(token);

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.TWILIO_PN!,
    //   from: "+15737703048",
    //   body: `당신의 로그인 토큰은 ${payload}.`,
    // });
    // console.log(message);
  }

  if (email) {
    // const mailOptions = {
    //   from: process.env.MAIL_ID,
    //   to: email,
    //   subject: "Nomad Carrot Authentication Email",
    //   text: `Authentication Code : ${payload}`,
    // };
    // const result = await smtpTransport.sendMail(
    //   mailOptions,
    //   (error, responses) => {
    //     if (error) {
    //       console.log(error);
    //       return null;
    //     } else {
    //       console.log(responses);
    //       return null;
    //     }
    //   }
    // );
    // smtpTransport.close();
    // console.log(result);
  }
  return res.json({ ok: true });
}

export default withHandler("POST", handler);
