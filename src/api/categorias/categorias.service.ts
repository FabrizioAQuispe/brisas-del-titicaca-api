import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CategoriasPublic } from '../model/ComidasCategoriaDTO';

@Injectable()
export class CategoriasService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async getCategoriasAdmin(){
        try{
            const categorias = await this.prisma.categorias.findMany({
                orderBy: {
                    orden: "desc"
                }
            });
            return categorias;
        } catch(err){
            throw new Error(`Error al obtener categorías: ${err.message}`);
        }
    }

    async createCategoriasAdmin(categoria:CategoriasPublic){
        try{
            const response = await this.prisma.categorias.create({
                data: categoria
            });

            if(!response){
                throw new Error('ERROR SERVICE RESPONSE' );
            }
            return response;
        } catch(err){
            throw new Error(`Error al crear categoría: ${err.message}`);
        }
    }

    async updateCategoriasAdmin(id: number, categoria: CategoriasPublic){
        try {
            const response = await this.prisma.categorias.updateMany({
                where: {
                    id: Number(id)
                },
                data: categoria 
            })

            return response;
        } catch (error) {
            throw new Error(`Error al actualizar categoría: ${error.message}`);
        }
    }
}
