import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendemailsService {
    constructor(
        private  readonly mailService: MailerService
    ){}

    sendMail(){
        const message = 'MENSAJE ENVIADO'
        const response = this.mailService.sendMail({
            from: 'Kingsley Okure <alekzander.fabrizio@gmail.com>',
            to: 'fabrizioquispe1900@gmail.com',
            subject: `Enviando desde NestJs`,
            text: message,      
        })

        console.log(response)
    }
}
