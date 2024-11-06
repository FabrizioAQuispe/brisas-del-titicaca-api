import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PaquetesDTO } from '../model/PaquetesDTO';

@Injectable()
export class PaquetesService {
    constructor(
        private prisma:PrismaService
    ){}

    async getPaquetes(){
        try {
            const response = await this.prisma.paquetes.findMany();
            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async createPaquetes(paquetes:PaquetesDTO){
        try {
            const response = await this.prisma.paquetes.create({
                data: paquetes
            })

            if(!response){
                throw new Error('ERROR TO CREATE FAILED');
            }

            return response;
        } catch (error) {
            throw new Error('ERROR CREATE FAILED' + error.message);
        }
    }

    async updatePaquetes(idPaquete:number,paquetes:PaquetesDTO){
        try {
            const response = await this.prisma.paquetes.findFirst({
                where:{
                    id: Number(idPaquete)
                }
            })
            if(!response.id){
                throw new Error('ERROR TO SEARCH ID PAQUETE');
            }

            const result = await this.prisma.paquetes.update({
                where:{
                    id: Number(response.id)
                },
                data: paquetes
            })

            return result;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error);
        }
    }

    async deletePaquetes(idPaquete:number){
        try {
            const response = await this.prisma.paquetes.delete({
                where: {
                    id: Number(idPaquete)
                }
            })
            
            if(!response){
                throw new Error('ERROR FETCH DATA 404');
            }

            return response;
        }
        catch(error){
            throw new Error('ERROR SERVICE' + error);
        }
    }
}
