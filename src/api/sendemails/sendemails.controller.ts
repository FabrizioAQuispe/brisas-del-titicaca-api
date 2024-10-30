import { Controller, Get, Post, Res } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';

@Controller('sendemails')
export class SendemailsController {
    constructor(
        private readonly sendemailsService: SendemailsService
    ) {}
    
    @Post('/send')
    async sendEmail() {
        const response = await this.sendemailsService.sendMail();
        console.log(response)
        return { message: 'Correo enviado (verifica la consola para más detalles)' };
    }
}
