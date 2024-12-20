import { Module } from '@nestjs/common';
import { TalleresController } from './talleres.controller';
import { TalleresService } from './talleres.service';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports:[],
    controllers: [TalleresController],
    providers: [TalleresService,PrismaService,JwtService]
})
export class TalleresModule {}
