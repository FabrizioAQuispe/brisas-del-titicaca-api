import { Injectable } from '@nestjs/common';
import { Categorias, Comidas } from '../model/EntradasDTO';
import { PrismaService } from '../services/prisma.service';
import { error } from 'console';

@Injectable()
export class ComidasService {
    constructor(
        private prisma:PrismaService
    ) { }

    async getComidas(){
        try{
            const response = await this.prisma.comidas.findMany()

            console.log(response)

            if(!response){
                throw new Error('ERROR AL LISTAR LAS COMIDAS');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL: ' + error)
        }
    }

    async createComidas(comidas:Comidas){
        try{
            const response = await this.prisma.comidas.create({
                data: comidas
            })

            if(!response){
                throw new Error('ERROR AL CREAR COMIDAS');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL' + error)
        }
    }

    async updateComidas(idComida:number,comidas:Comidas){
        try{
            const response = await this.prisma.eventos.update({
                where:{
                    id: Number(idComida)
                },
                data: comidas
            })

            if(!response){
                throw new Error('ERROR AL ACTUALIZAR');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL' + error);
        }
    }

    async deleteComidas(idComida:number){
        try{
            const response = await this.prisma.comidas.delete({
                where: {
                    id: Number(idComida)
                }
            })

            if(!response){
                throw new Error('ERROR SERVER INTERNAL');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL' + error);
        }
    }
}
