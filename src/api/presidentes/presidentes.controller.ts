import { Body, Controller, Get, Post } from '@nestjs/common';
import { PresidentesService } from './presidentes.service';
import { Presidentes } from '../model/PresidentesDTO';

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

    @Post('/create')
    async createPresidents(@Body() presidentes: Presidentes){
        try {
            return this.presidentService.createPresidents(presidentes);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message);
        }
    }

}
