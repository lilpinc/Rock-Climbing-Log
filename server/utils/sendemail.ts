const nodemailer = require("nodemailer");

export async function sendEmail(email:string, url: string){
    const account = await nodemailer.createTestAccount();
    console.log('testAccount',account)

    const trasnporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass:account.pass,
        },
    });

    const info = await trasnporter.sendEmail({
        from: "Anna <anna@gmail.com>",
        to: email,
        subject: "Daily Sends - reset password link",
        html: `<a href= "${url}">${url}</a>`,
    });


    console.log("Message sent: %s", info.messageId)
    console.log ("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}