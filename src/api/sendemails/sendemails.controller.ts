import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';

@Controller('sendemails')
export class SendemailsController {
    constructor(
        private readonly sendemailsService: SendemailsService
    ) {}
    
    @Post('/send')
    async sendEmail(@Body() body: { messageSend: string; fromSend: string; toSend: string; subjectSend: string }) {
        const { messageSend, fromSend, toSend, subjectSend } = body;

        try {
            const response = await this.sendemailsService.sendMail(messageSend, fromSend, toSend, subjectSend);
            console.log(response)
            return { message: 'Correo enviado (verifica la consola para más detalles)' };
        } catch (error) {
            console.error('Error al enviar correo:', error);
            return error;
        }
    }

}
