import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendemailsService {
    constructor(
        private  readonly mailService: MailerService
    ){}

    async sendMail() {
        const message = 'MENSAJE ENVIADO';
        try {
            const response = await this.mailService.sendMail({
                from: 'Kingsley Okure <alekzander.fabrizio@gmail.com>',
                to: 'alekzander.fabrizio@gmail.com',
                subject: 'Enviando desde NestJs',
                text: message,
            });
            console.log('Correo enviado:', response);
        } catch (error) {
            console.error('Error al enviar correo:', error);
        }
    }


}
