import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Presidentes } from '../model/PresidentesDTO';

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
            const result = await this.prisma.presidentes.createMany({
                data: presidentes
            });
        } catch (error) {

        }
    }
}
