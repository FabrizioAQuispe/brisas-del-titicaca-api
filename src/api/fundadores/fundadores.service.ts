import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Fundadores } from '../model/FundadoresDTO';

@Injectable()
export class FundadoresService {
    constructor(
        private prisma:PrismaService
    ){}

    async getFundadores(){
        try{
            const response = await this.prisma.fundadodres.findMany()
            if(!response){
                throw new Error('ERROR AL LISTAR LOS FUNDADORES');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL: ')
        }
    }

    async createFundadores(fundadores:Fundadores){
        try{
            const response = await this.prisma.fundadodres.create({
                data: fundadores
            })

            console.log(response)

            if(!response){
                throw new Error('ERROR AL CREAR FUNDADOR');
            }
            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL: ' + error )
        }
    }

    async updateFundadores(idFundador:number,fundadores:Fundadores){
        try{
            const response = await this.prisma.fundadodres.update({
                where: {
                    id: Number(idFundador)
                },
                data: fundadores
            })

            
            if(!response){
                throw new Error('ERROR AL ACTUALIZAR FUNDADOR');
            }

            return response;
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL: ' );
        }
    }

    async deleteFundadores(idFundador:number){
        try{
            const response = await this.prisma.fundadodres.delete({
                where: {
                    id: Number(idFundador)
                }
            })

                        
            if(!response){
                throw new Error('ERROR AL ELIMINAR FUNDADOR');
            }
        }catch(error){
            throw new Error('ERROR SERVER INTERNAL' )
        }
    }
}
