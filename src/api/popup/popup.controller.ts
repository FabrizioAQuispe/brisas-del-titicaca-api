import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PopupService } from './popup.service';
import { Popup } from '../model/PopuptDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('popup')
export class PopupController {
    constructor(
        private popupService: PopupService
    ) { }

    @Get('/list')
    async getPopup() {
        try {
            return this.popupService.getPopup();
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }
    @UseGuards(JwtAuthGuard)

    @Post('/create')
    async createPopup(@Body() popup: Popup) {
        try {
            return this.popupService.createPopup(popup);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }
    @UseGuards(JwtAuthGuard)

    @Put('/update/:idPopup')
    async updatePopup(@Param('idPopup') idPopup: number, @Body() popup: Popup) {
        try {
            return this.popupService.updatePopup(idPopup, popup);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }
    @UseGuards(JwtAuthGuard)

    @Delete('/delete/:idPopup')
    async deletePopup(@Param('idPopup') idPopup: number) {
        try {
            return this.popupService.deletePopup(idPopup);
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message)
        }
    }
}
