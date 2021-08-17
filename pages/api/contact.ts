import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "vimtorcontact@gmail.com",
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: "vimtorcontact@gmail.com",
        to: "eduardogomezpueyo@gmail.com",
        subject: `Message from ${req.body.email}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) console.log(error);
        else console.log(info);
    });

    res.status(200).json({
        message: "Email was sent successfully",
    });
};

export default handler;
