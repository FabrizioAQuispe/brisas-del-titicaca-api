import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { TalleresCulturales } from '../model/TalleresCulturaleDTO';
import { TalleresCategoria } from '../model/TalleresCategoriaDTO';

@Injectable()
export class TalleresService {
    constructor(
        private prisma: PrismaService
    ) { }

    async updateCategoria(idTallerrCategoria: number, talleresCategoria: TalleresCategoria) {
        try {
            const response = await this.prisma.categorias_talleres.findFirst({
                where: {
                    id: Number(idTallerrCategoria)
                }
            })

            if(!response.id){
                throw new Error('NOT FOUND ID CATEGORY TALLER');
            }

            const result = await this.prisma.categorias_talleres.update({
                where:{
                    id: Number(response.id)
                },
                data: talleresCategoria
            })
        } catch (error) {
            throw new Error('ERROR SERVICE' + error);
        }
    }
    async createCategoria(talleresCateogria: TalleresCategoria) {
        try {
            const response = await this.prisma.categorias_talleres.create({
                data: talleresCateogria
            })

            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error);
        }
    }

    async getTalleresWithCategoria() {
        try {
            const response = await this.prisma.categorias_talleres.findMany({
                include: {
                    talleres: true
                }
            })

            if (!response) {
                throw new Error('ERROR RESPONSE DATA');
            }

            return response
        } catch (error) {
            throw new Error('ERROR SERVICE' + error);
        }
    }

    async getTalleres() {
        try {
            const response = await this.prisma.talleres_galeria.findMany()
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE ' + error.message);
        }
    }

    async createTalleres(talleresCulturales: TalleresCulturales) {
        try {
            const response = await this.prisma.talleres_galeria.create({
                data: talleresCulturales
            })

            if (!response) {
                throw new Error('ERROR AL CREAR TALLERES');
            }
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE ' + error.message);
        }
    }

    async updateTalleres(id: number, talleresCulturales: TalleresCulturales) {
        try {
            const response = await this.prisma.talleres_galeria.findFirst({
                where: {
                    id: Number(id)
                },
            })

            if (!response.id) {
                throw new Error('ERROR AL ACTUALIZAR TALLERES');
            }

            const updatedResponse = await this.prisma.talleres_galeria.update({
                where: {
                    id: Number(response.id)
                },
                data: talleresCulturales
            })

            return updatedResponse;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }

    async deleteTalleres(id: number) {
        try {
            const response = await this.prisma.talleres_galeria.findFirst({
                where: {
                    id: Number(id)
                },
            })

            if (!response.id) {
                throw new Error('ERROR AL ACTUALIZAR TALLERES');
            }

            const result = await this.prisma.talleres_galeria.delete({
                where: {
                    id: Number(response.id)
                }
            })

            return result
        } catch (error) {
            throw new Error('ERROR SERVER' + error.message)
        }
    }
}
