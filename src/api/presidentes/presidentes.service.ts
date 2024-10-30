import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { MessagePresidentes, Presidentes } from '../model/PresidentesDTO';

@Injectable()
export class PresidentesService {
    constructor(
        private prisma:PrismaService
    ){}

    async getPresidentes(){
        try {
            const result = await this.prisma.presidentes.findMany();
            if(!result){    
                throw new Error('ERROR FIND TO PRESIDENTS');
            }

            return result
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async createPresidents(presidentes: Presidentes){
        try {
            const result = await this.prisma.presidentes.create({
                data: presidentes
            });

            if(!result){
                throw new Error('ERROR CREATE PRESIDENTS');
            }

            const response:MessagePresidentes = {
                code: 201,
                message: 'SE CREO CON ÉXITO EL PRESIDENTE',
                result: result
            }

            const res:MessagePresidentes = {
                code: 500,
                message: 'ERROR CREAR PRESIDENTE'   ,
            }

            if(!response){
                return res;
            }
            return response;
        } catch (error) {

        }
    }

    async updatePresidents(idPresident:number,presidentes: Presidentes){
        try {
            const result = await this.prisma.presidentes.findFirst({
                where:{
                    id: Number(idPresident)
                }
            })

            if(!result.id){
                throw new Error('ERROR TO FIND PRESIDENT');
            }
            
            const response = await this.prisma.presidentes.update({
                where:{
                    id: Number(result.id)
                },
                data: presidentes
            })

            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async deletePresident(idPresident:number){  
        try {
            const result = await this.prisma.presidentes.findFirst({
                where: {
                    id: Number(idPresident)
                }
            });

            if(!result.id){
                throw new Error('ERROR TO FIND PRESIDENT');
            }

            const response = await this.prisma.presidentes.delete({
                where: {
                    id: Number(result.id)
                }
            });

            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }
}
