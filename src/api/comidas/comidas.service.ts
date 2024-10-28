import { Injectable } from '@nestjs/common';
import { Categorias, Comidas } from '../model/EntradasDTO';
import { PrismaService } from '../services/prisma.service';
import { Comidass,CategoriasPublic } from '../model/ComidasCategoriaDTO';
@Injectable()
export class ComidasService {
    constructor(
        private prisma:PrismaService
    ) { }


    async createComidasByCategoria(comidasPublic:Comidass){
        try {
            const response = await this.prisma.categorias.create({
                data: comidasPublic
            })
            console.log(response)
            if(!response){
                throw new Error('ERROR AL CREAR COMIDA');
            }
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error); 
        }
    }


    async getComidasByCategoriaAdmin(){
        try {
            const response = await this.prisma.categorias.findMany({
                include: {
                    comidas: true
                }
            })
            if(!response){
                throw new Error('ERROR SERVER SERVICE');
            }
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE: ' + error);
        }
    }

    async getComidasByCategoria(){
        try {
            const response = await this.prisma.categorias.findMany({
                include: {
                    comidas: true
                }
            })
            if(!response){
                throw new Error('ERROR SERVER SERVICE');
            }
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE: ' + error);
        }
    }
    async buscarComidasPorNombre(nombre: string){
        try{
            const response = await this.prisma.comidas.findFirst({
                where: {
                    nombre: nombre
                },
                include: {
                    categoria: true
                }
            })      
            if(!response){
                throw new Error('ERROR AL BUSCAR COMIDA POR NOMBRE');
            }   

            return response;
        }catch(error){ 
         }
    }

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

    /**
     * Creates a new comida in the database.
     *
     * @param comidas - The comida object to be created.
     * @returns The created comida object.
     * @throws Will throw an error if the comida could not be created.
     * @throws Will throw a server internal error if an unexpected error occurs.
     */
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


    async updateComidas(idComida:number,comidas:Comidass){
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
