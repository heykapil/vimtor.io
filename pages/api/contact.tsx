export default function (req: Request, res: Response) {
    require("dotenv").config();

    let nodemailer = require("nodemailer");
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
        // @ts-ignore
        subject: `Message From ${req.body.email}`,
        // @ts-ignore
        text: req.body.message + " | Sent from: " + req.body.email,
        // @ts-ignore
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, function (err: Error, info: string) {
        if (err) console.log(err);
        else console.log(info);
    });

    res.ok;
}
