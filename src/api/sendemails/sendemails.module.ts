import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { SendemailsService } from './sendemails.service';
import { SendemailsController } from './sendemails.controller';
import * as dotenv from 'dotenv'
import { PrismaService } from '../services/prisma.service';


dotenv.config();

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME || 'alekzander.fabrizio@gmail.com',
                    pass: process.env.EMAIL_PASSWORD || 'vurb bpca rihd tgcl',
                },
            }
        })
    ],
    providers: [SendemailsService,PrismaService],
    controllers: [SendemailsController]
})
export class SendemailsModule { }
