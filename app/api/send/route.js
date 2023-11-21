import nodemailer from 'nodemailer' 

export async function POST(req){
    const data = await req.json()
    const { to,subject , text} = data
    console.log({to,subject , text})

    const {SMTP_PASS,SMTP_EMAIL} = process.env
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:SMTP_EMAIL,
            pass:SMTP_PASS,
        }
    })

    await new Promise((res,rej) => {
        transporter.verify((err,success) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        })
    })

    const mailOptions = {
        from:SMTP_EMAIL,
        to:'ayushnamdev2004@gmail.com',
        subject:`mail from ${to} subject : ${subject}`,
        text:text
    }

    await new Promise((res,rej) => {
        transporter.sendMail(mailOptions, function(err,info){
            if (err) {
                console.log(err)
                rej(err)
              } else {
                console.log("Email Sent",info);
                res(info)
                return true;
              }
        })
    })

    return new Response('done')
}
