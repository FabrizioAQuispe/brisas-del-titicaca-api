import { Module } from '@nestjs/common';
import { PaquetesService } from './paquetes.service';
import { PaquetesController } from './paquetes.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [PaquetesController],
  providers: [PaquetesService,JwtService,PrismaService]
})
export class PaquetesModule {}
