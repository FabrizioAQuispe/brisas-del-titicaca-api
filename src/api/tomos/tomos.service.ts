import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Tomos,MessageTomos } from '../model/TomosDTO';

@Injectable()
export class TomosService {
    constructor(
        private prisma:PrismaService
    ){}

    async getTomos(){
        try{
            const response = await this.prisma.tomos.findMany();
            
            if(!response){
                throw new Error('ERROR FETCH DATA 404');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER RESPONSE: ' + error);
        }
    }

    async createTomos(tomos:Tomos){
        try{
            const response = await this.prisma.tomos.createMany({
                data: tomos
            })

            if(!response){
                throw new Error('ERROR FETCH DATA 404');
            }

            const message:MessageTomos = {
                code: 201,
                message: 'SE CREO CON EXITO'
            }

            return message;
        }catch(error){
            throw new Error('ERROR SERVER RESPONSE: ' + error);
        }
    }

    async updateTomos(tomos:Tomos,idTomo:number){
        try{
            const response = await this.prisma.tomos.update({
                where: {
                    id: Number(idTomo)
                },
                data: tomos
            })

            if(!response){
                throw new Error('ERROR FETCH DATA 404');
            }

            const message:MessageTomos = {
                code: 201,
                message: 'SE ACTUALIZO CON ÉXITO'
            }

            return message;
        }catch(error){
            throw new Error('ERROR SERVER RESPONSE: '+ error)
        }
    }

    async deleteTomos(idTomo:number){
        try{
            const response = await this.prisma.tomos.delete({
                where: {
                    id: Number(idTomo)
                }
            })

            if(!response){
                throw new Error('ERROR FETCH DATA 404');
            }
            const message:MessageTomos = {
                code: 200,
                message: 'SE ELIMINO CON ÉXITO'
            }

            return message;
        }catch(error){
            throw new Error('ERROR SERVER RESPONSE: '+ error)
        }
    }
}
