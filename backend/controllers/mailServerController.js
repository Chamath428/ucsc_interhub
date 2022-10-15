import nodemailer from 'nodemailer';
import { acceptedMail } from '../templates/acceptRegisteration.js';

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
          subject: 'Change the subject',
          text: 'That was easy!',
          html: acceptedMail(),
        };

export const sendRegisterationMail = ()=>{
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}