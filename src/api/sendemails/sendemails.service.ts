import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendemailsService {
    constructor(
        private  readonly mailService: MailerService
    ){}

    async sendMail(messageSend: string, fromSend: string, toSend: string, subjectSend: string) {
        // Validaciones básicas
        if (!messageSend || !fromSend || !toSend || !subjectSend) {
            throw new Error('Todos los campos son obligatorios.');
        }
    
        try {
            const response = await this.mailService.sendMail({
                from: fromSend,
                to: toSend,
                subject: subjectSend,
                text: messageSend,
            });
            console.log('Correo enviado:', response);
        } catch (error) {
            console.error('Error al enviar correo:', error);
            throw new Error('No se pudo enviar el correo.'); // Lanza un error para manejarlo más arriba si es necesario
        }
    }


}
