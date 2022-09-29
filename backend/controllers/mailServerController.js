import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'internhub.ucsc.project@gmail.com',
            pass: 'focnhreutpuhzbhh',
         },
    secure: true,
    });

    const mailData = {
        from: 'internhub.ucsc.project@gmail.com',  // sender address
          to: 'chamath428@gmail.com',   // list of receivers
          subject: 'Sending Email using Node.js',
          text: 'That was easy!',
          html: '<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
        };

export const sendRegisterationMail = ()=>{
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}