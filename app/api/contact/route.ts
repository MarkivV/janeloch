import { FormSchema } from "@/components/layout/sections/contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, email, plan, message } =
    (await req.json()) as FormSchema;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `${firstName} ${lastName} is interested in the ${plan}.`,
      text: message,
      html: `
        <p>${email},</p>
        <p>${message}</p>
      `,
    });

    return new Response("Sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error while sending", { status: 500 });
  }
}
