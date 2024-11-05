import { Module } from '@nestjs/common';
import { EventosFechasService } from './eventos-fechas.service';
import { EventosFechasController } from './eventos-fechas.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [EventosFechasService,PrismaService,JwtService],
  controllers: [EventosFechasController]
})
export class EventosFechasModule {}
