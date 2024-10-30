import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Promociones } from '../model/PromocionesDTO';

@Injectable()
export class PromocionesService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getPromociones() {
        try {
            const result = await this.prisma.promociones.findMany();

            if (!result) {
                throw new Error('ERROR TO FIND PROMOTIONS')
            }
            return result;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async createPromociones(promociones: Promociones) {
        try {
            const result = await this.prisma.promociones.create({
                data: promociones
            });
            return result
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async updatePromociones(idPromocion: number, promociones: Promociones) {
        try {
            const result = await this.prisma.promociones.update({
                where: {
                    id: Number(idPromocion)
                },
                data: promociones
            });
            return result
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async deletePromociones(idPromocion: number) {
        try {
            const result = await this.prisma.promociones.findFirst({
                where: {
                    id: Number(idPromocion)
                }
            })

            if(!result.id){
                throw new Error('ERROR TO FIND PROMOTION')
            }

            const response = await this.prisma.promociones.delete({
                where: {
                    id: Number(result.id)
                }
            })

            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }
}
