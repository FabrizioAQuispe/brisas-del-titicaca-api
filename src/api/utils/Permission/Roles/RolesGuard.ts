import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../../../model/RolesDTO';
import { permiso } from 'src/api/model/PermisosDTO';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Roles[]>('roles', context.getHandler()) || [];

    const userPermissions = permiso;

    if (requiredRoles.length === 0) {
      return true;
    }

    const hasPermission = requiredRoles.some(role => 
      userPermissions.some(userPermission => userPermission.nombre === role.nombre)
    );

    if (!hasPermission) {
      throw new UnauthorizedException('NO TIENES LOS PERMISOS SUFICIENTES');
    }

    return true;
  }
}
