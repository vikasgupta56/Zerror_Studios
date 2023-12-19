import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, phone, email, country, msg, budget } = req.body;
  let passw = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
  // console.log(passw, "pass from .envl");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "vika.gupta55@gmail.com",
      pass: 'wonrxdtcvupidfxl'
    }
  });

  try {
    await transporter.sendMail({
      from: 'vika.gupta55@gmail.com',
      to: "zerrorstudios@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Welcome Email</title>
        <style>
        h3{
text-align:center;
        }
        </style>
      </head>
      <body>
        <h3>We got a message from ${name}! </h3>
        <p>Contact no is : ${phone} </p>
        <p>Email is : ${email} </p>
        <p>Country is : ${country} </p>
        <p>Message given is : ${msg} </p>
        <p>Budget selected is : ${budget} </p>
      </body>
      </html>
      `
    });

  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};