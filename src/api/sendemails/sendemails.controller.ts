import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';

@Controller('sendemails')
export class SendemailsController {
    constructor(
        private readonly sendemailsService: SendemailsService
    ) {}
    
    @Post('/send')
    async sendEmail(@Body() body: { messageSend: string;  subjectSend: string; type:string }) {
        const { messageSend, subjectSend,type } = body;

        try {
            const response = await this.sendemailsService.sendMail(messageSend, subjectSend,type);
            console.log(response)
            return { message: 'Correo enviado (verifica la consola para más detalles)' };
        } catch (error) {
            console.error('Error al enviar correo:', error);
            return error;
        }
    }
}
