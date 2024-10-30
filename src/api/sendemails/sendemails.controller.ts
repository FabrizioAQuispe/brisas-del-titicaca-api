import { Controller, Get, Res } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';

@Controller('sendemails')
export class SendemailsController {
    constructor(
        private readonly sendemailsService: SendemailsService
    ) {}
    
    @Get('/send')
    sendEmail(@Res() response:any){
        const mail = this.sendemailsService.sendMail();
        return response.status(200).json({ message: 'Email sent successfully' ,mail});
    }
}
