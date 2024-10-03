import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Eventos } from '../model/EventosDTO';

@Injectable()
export class EventosService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getEventos() {
        try {
            const result = await this.prisma.eventos.findMany();

            return result;
        } catch (error) {
            throw new Error();
        }
    }

    async getBuscarEventos(nombre: string) {
        try {
            const result = await this.prisma.eventos.findFirst({
                where: {
                    slug: nombre
                }
            })

            if (!result) {
                throw new Error('ERROR SEARCH DATA')
            }

            console.log(result, nombre)

            return result;
        } catch (error) {
            throw new Error('ERROR SERVER INTERNAL')
        }
    }

    async createEventos(eventos: Eventos) {
        try {
            const response = await this.prisma.eventos.create({
                data: eventos
            })
            if (!response) {
                throw new Error('ERROR AL CREAR DATOS');
            }
            console.log(response)
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER INTERNAL');
        }
    }

    async updateEventos(idUser: number, eventos: Eventos) {
        try {
            const response = await this.prisma.eventos.update({
                where: {
                    id: Number(idUser)
                },
                data: eventos
            })

            if (!response) {
                throw new Error('ERROR AL ACTUALIZAR')
            }

            return response;

        } catch (error) {
            throw new Error('ERROR SERVER INTERNAL')
        }
    }

    async deleteEventos(idEvento: number) {
        try {
            const response = await this.prisma.eventos.delete({
                where: {
                    id: idEvento
                }
            })

            if (!response) {
                throw new Error('ERROR AL OBTENER RESPUESTAS');
            }
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER INTERNAL')
        }
    }

    async listarEventosPublic(idUser:number){
        const response = await this.prisma.eventos.findMany({
            where: {
                idUser: Number(idUser)
            }
        })
        try{
            if(!response){
                throw new UnauthorizedException('LA RESPUESTA NO EXISTE');
            }

            return response;
        }catch(error){
            throw new Error(error);
        }
    }
}
