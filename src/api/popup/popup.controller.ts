import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PopupService } from './popup.service';
import { Popup } from '../model/PopuptDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('popup')
export class PopupController {
    constructor(
        private popupService:PopupService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/list')
    async getPopup(){
        try {
            return this.popupService.getPopup();
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }

    @Post('/create')
    async createPopup(@Body() popup: Popup){
        try {
            return this.popupService.createPopup(popup);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }

    @Delete('/delete/:idPopup')
    async deletePopup(@Param('idPopup') idPopup:Number){
        try {
            return this.popupService.deletePopup(idPopup);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }   
    }
}
