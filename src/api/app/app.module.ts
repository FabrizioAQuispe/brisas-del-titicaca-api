import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from '../auth/usuarios.module';
import { PrismaService } from '../services/prisma.service';
import { UsuariosController } from '../auth/usuarios.controller';
import { UsuariosService } from '../auth/usuarios.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { RolesService } from '../roles/roles.service';
import { RolesModule } from '../roles/roles.module';
import { EventosController } from '../eventos/eventos.controller';
import { PermisosService } from '../permisos/permisos.service';
import { EventosModule } from '../eventos/eventos.module';
import { EventosService } from '../eventos/eventos.service';
import { PermisosController } from '../permisos/permisos.controller';
import { DanzasModule } from '../danzas/danzas.module';
import { DanzasController } from '../danzas/danzas.controller';
import { DanzasService } from '../danzas/danzas.service';
import { FundadoresService } from '../fundadores/fundadores.service';
import { FundadoresController } from '../fundadores/fundadores.controller';
import { FundadoresModule } from '../fundadores/fundadores.module';

@Module({
  imports: [
    FundadoresModule,
    RolesModule,
    EventosModule,
    UsuariosModule,
    DanzasModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '72h' }
    }),
  ],
  controllers: [AppController,UsuariosController,EventosController,PermisosController,DanzasController,FundadoresController],
  providers: [AppService,PrismaService, UsuariosService,RolesService,PermisosService,JwtAuthGuard,EventosService,DanzasService,FundadoresService],
})
export class AppModule {}
