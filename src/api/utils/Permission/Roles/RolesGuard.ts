import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../../../model/RolesDTO';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Roles[]>('roles', context.getHandler()) || [];

    // Si no hay roles especificados, se permite el acceso.
    if (requiredRoles.length === 0) {
      return true;
    }

    // Verificar si el usuario tiene el permiso requerido.
    const hasPermission = requiredRoles.some(item => {
      return 'ver.eventos' === item.nombre
    });
    if (!hasPermission) {
      throw new UnauthorizedException('NO TIENES LOS PERMISOS SUFICIENTES');
    }

    return true;
  }
}
