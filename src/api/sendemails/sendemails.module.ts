import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';
import { SendemailsController } from './sendemails.controller';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            }
        })
    ],
    providers: [SendemailsService],
    controllers: [SendemailsController]
})
export class SendemailsModule { }
