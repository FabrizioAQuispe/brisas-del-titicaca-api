import { SetMetadata } from '@nestjs/common';
import {Permisos} from '../../../model/RolesDTO';
export const PermisosDecorator = (data: Permisos[]) => {
  console.log(data)
  return SetMetadata('permisos', data);
};



