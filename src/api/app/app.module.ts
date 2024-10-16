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
import { ComidasModule } from '../comidas/comidas.module';
import { ComidasController } from '../comidas/comidas.controller';
import { ComidasService } from '../comidas/comidas.service';
import { TomosService } from '../tomos/tomos.service';
import { TomosController } from '../tomos/tomos.controller';
import { TomosModule } from '../tomos/tomos.module';
import { TomosContenidoController } from '../tomos-contenido/tomos-contenido.controller';
import { TomosContenidoService } from '../tomos-contenido/tomos-contenido.service';
import { TomosContenidoModule } from '../tomos-contenido/tomos-contenido.module';

@Module({
  imports: [
    FundadoresModule,
    RolesModule,
    EventosModule,
    UsuariosModule,
    DanzasModule,
    ComidasModule,
    TomosModule,
    TomosContenidoModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '72h' }
    }),
  ],
  controllers: [AppController,UsuariosController,EventosController,PermisosController,DanzasController,FundadoresController,ComidasController,TomosController,TomosContenidoController],
  providers: [AppService,PrismaService, UsuariosService,RolesService,PermisosService,JwtAuthGuard,EventosService,DanzasService,FundadoresService,ComidasService,TomosService,TomosContenidoService],
})
export class AppModule {}
