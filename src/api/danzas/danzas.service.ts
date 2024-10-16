import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Danzas, MensajeActualizadoDanzas, MensajeDanzas, MensajeEliminadoDanzas } from '../model/DanzasDTO';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class DanzasService {
    constructor(
        private prisma:PrismaService
    ){}


    async getDanzasListAll(){
        try{
            const response = await this.prisma.danzas.findMany();
            if(!response){
                throw new UnauthorizedException('ERROR AL ENCONTRAR LAS DANZAS');
            }
            return response;
        }catch(error){
            throw new Error('SERVER INTERNAL ERROR');
        }
    }

    async getDanzasListAdmin(){
        try{
            const response = await this.prisma.danzas.findMany();
            console.log(response)
            if(!response){
                throw new UnauthorizedException('ERROR AL ENCONTRAR LAS DANZAS');
            }
            return response;
        }catch(error){
            throw new Error('SERVER INTERNAL ERROR');
        }
    }

    async createDanzasAdmin(danzas:Danzas){
        try{
            const response = await this.prisma.danzas.create({
                data: danzas
            });
            if(!response){
                throw new Error('ERROR AL CREAR DANZAS');
            }

            const result:MensajeDanzas = {
                message: 'Se creo con éxito la danza',
                status: 200
            }

            return result;

        }catch(error){
            throw new Error('ERROR SERVER INTERNAL')
        }
    }

    async updateDanzasAdmin(idDanza:number,danzas:Danzas){
        try{
            const response = await this.prisma.danzas.update({
                where: {
                    id: Number(idDanza)
                },
                data: danzas
            })

            if(!response){
                throw new Error('ERROR AL CREAR LA DANZA');
            }

            const result:MensajeActualizadoDanzas = {
                message: 'Se actualizo con éxito',
                status: 200
            }

            return result;
        }catch(error){
            throw new Error('ERROR SERER INTERNAL');
        }
    }

    async deleteDanzasAdmin(idDanza:number){
        const response = await this.prisma.danzas.delete({
            where: {
                id:Number(idDanza)
            }
        })

        if(!response){
            throw new Error('ERROR AL ELIMINAR LAS DANZAS');
        }

        const result:MensajeEliminadoDanzas = {
            message: 'SE ELIMINO CON ÉXITO',
            status: 200
        }

        return result;
    }

}
