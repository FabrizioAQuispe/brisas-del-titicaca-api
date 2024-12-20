import { Module } from '@nestjs/common';
import { PopupService } from './popup.service';
import { PopupController } from './popup.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [PopupService,JwtService,PrismaService],
  controllers: [PopupController]
})
export class PopupModule {}
