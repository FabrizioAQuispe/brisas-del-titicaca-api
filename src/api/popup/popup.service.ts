import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Popup } from '../model/PopuptDTO';

@Injectable()
export class PopupService {
    constructor(
        private prisma:PrismaService
    ){}

    async getPopup(){
        try{
            const popup = this.prisma.popup.findMany();
            return popup;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createPopup(popup: Popup){
        try {
            const response = await this.prisma.popup.create({
                data: popup    
            })
            if(!response){
                throw new Error('ERROR AL CREAR POPUP');
            }

            return response;
        } catch (error) {
            throw new Error(error); 
        }
    }

    async updatePopup(idPopup:Number, popup:Popup){
        try {
            const res = await this.prisma.popup.findFirst({
                where: {
                    id: Number(idPopup),
                },
            })
            if(!res.id){
                throw new Error('ERROR TO FIND POPUP')
            }

            const result = await this.prisma.popup.update({
                where: {
                    id: Number(res)
                },
                data: popup
            })

            if(!result.id){
                throw new Error('ERROR AL ACTUALIZAR POPUP ANTERIOR');
            }

            return result;
        } catch (error) {
            throw new Error('ERROR SERVICE'  + error.message); 
        }
    }

    async deletePopup(idPopup:Number){
        try {
            const result = await this.prisma.popup.findFirst({
                where: {
                    id: Number(idPopup)
                }   
            })
            if(!result.id){
                throw new Error('POPUP NO ENCONTRADO');  // Implementar manejo de errores más específicos según sea necesario.  
            }
            const response = await this.prisma.popup.delete({
                where: {
                    id: Number(result.id)
                }
            })

            if(!response){  
                throw new Error('ERROR AL ELIMINAR POPUP');
            }
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}
