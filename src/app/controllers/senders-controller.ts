import { prisma } from "../config/db";
import { transporter, MAIL_TEMPLATE } from "../config/mail";
import { Sender } from "@prisma/client";

export class SendersController {
  private static _instance = new SendersController();

  private constructor() {}

  static get instance() {
    return this._instance;
  }

  async create(sender: Sender) {
    const { name, email } = sender;

    await Promise.all([
      transporter.sendMail({
        from: `João Pedro <${process.env.MAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting me ${name}.`,
        html: MAIL_TEMPLATE(name),
      }),
      transporter.sendMail({
        from: `Me <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        subject: `You have been contacted.`,
        text: `Name: ${name} | Email: ${email}`,
      }),
    ]);

    await prisma.sender.create({ data: sender });
  }
}
