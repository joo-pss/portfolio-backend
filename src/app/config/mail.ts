import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export function MAIL_TEMPLATE(name: string) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Mail Template</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          padding: 2rem;
          font-size: 1.1rem;
        }
        .container h1 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .container p {
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Dear ${name}</h1>
        <p>
          Thank you very much for reaching out to me. I'm 
          delighted that we've established this connection.
        </p>
        <p>
          I will respond as soon as possible. Please feel free to provide 
          any additional details or information in your message that might 
          be helpful so that I can provide a comprehensive response.
        </p>
        <p>Again, thank you for getting in touch.</p>
        <span>Sincerely,<br>João Pedro 🖖</span>
      </div>
    </body>
  </html>
  `;
}
