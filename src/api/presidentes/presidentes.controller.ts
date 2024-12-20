import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PresidentesService } from './presidentes.service';
import { Presidentes } from '../model/PresidentesDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('presidentes')
export class PresidentesController {
    constructor(
        private presidentService:PresidentesService
    ){}

    @Get('/list')
    async getPresidentes(){
        try {
            return this.presidentService.getPresidentes();
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createPresidents(@Body() presidentes: Presidentes){
        try {
            return this.presidentService.createPresidents(presidentes);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message);
        }
    }
    @UseGuards(JwtAuthGuard)
    @Put('/update/:idPresident')
    async updatePresidents(@Param('idPresident') idPresident:number,@Body() presidentes: Presidentes){
        try {
            return this.presidentService.updatePresidents(idPresident, presidentes);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idPresident')
    async deletePresident(@Param('idPresident') idPresident:number){  
        try {
            return this.presidentService.deletePresident(idPresident);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }

}
