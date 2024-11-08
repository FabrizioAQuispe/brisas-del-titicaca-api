import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendemailsService {
    constructor(
        private readonly mailService: MailerService
    ) { }

    async sendMail(messageSend: string, subjectSend: string, type: string) {
        // Validaciones básicas
        if (!messageSend || !subjectSend) {
            throw new Error('Todos los campos son obligatorios.');
        }

        try {
            // const randomEmails = [
            //     "ventasyeventos@brisasdeltiticaca.com",
            //     "ventas3@brisasdeltiticaca.com"
            // ]
            /* const randomEmails = [
                {
                    eventos_externos: [
                        "wramirez@brisasdeltiticaca.com",
                        "fabrizioquispe1900@gmail.com",
                        "luis05medina22@gmail.com",
                        "sistemas@brisasdeltiticaca.com"
                    ]
                }, {
                    puquina: [
                        // "salon@brisasdeltiticaca.com",
                        "fabrizioquispe1900@gmail.com"
                    ]
                },
            ]; */

            var randomEmails = []

            if (type == 'puquina') {
                randomEmails.push(
                    "fabrizioquispe1900@gmail.com"
                )
            }
            else {
                randomEmails.push(
                    "wramirez@brisasdeltiticaca.com",
                    "fabrizioquispe1900@gmail.com",
                    "luis05medina22@gmail.com",
                    /* "sistemas@brisasdeltiticaca.com" */
                )
            }

            console.log(randomEmails)

            const randomNames = Math.floor(Math.random() * randomEmails.length);

            const response = await this.mailService.sendMail({
                from: process.env.EMAIL_USERNAME,
                to: randomEmails[randomNames],
                subject: subjectSend,
                html: messageSend
            });
            console.log('Correo enviado:', response);

            return true;
        } catch (error) {
            console.error('Error al enviar correo:', error);
            throw new Error('No se pudo enviar el correo.'); // Lanza un error para manejarlo más arriba si es necesario
        }
    }


}