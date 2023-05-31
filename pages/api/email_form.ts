import { NextApiResponse, NextApiRequest } from "next";

const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sendEmail(req?.body?.data);
    res.status(200).send({ data: "ok" });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function sendEmail(data) {
  const { email, email_text, name } = data;

  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER_NAME,
      pass: process.env.EMAIL_USER_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER_NAME,
    to: process.env.EMAIL_USER_NAME_TO, 
    subject: "Message from a.avdeev.github.io",
    html: '<!DOCTYPE html>'+
    '<html><head><title>Appointment</title>'+
    '</head><body><div>'+
    `<p><b>Name:</b> ${name}</p>`+
    `<b>Email: ${email}</b><br>\n`+
    `<p>${email_text}</p>`+
    '</div></body></html>',
  });
  console.log("Message sent: %s", info.messageId);
  return info;
}
