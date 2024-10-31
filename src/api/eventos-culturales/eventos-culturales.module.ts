import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';
import { EventosCulturalesService } from './eventos-culturales.service';
import { EventosCulturalesController } from './eventos-culturales.controller';

@Module({
    imports: [],
    controllers: [EventosCulturalesController],
    providers: [EventosCulturalesService,JwtService,PrismaService],
    exports: [],
})
export class EventosCulturalesModule {}
