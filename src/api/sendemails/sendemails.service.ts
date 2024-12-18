import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class SendemailsService {
    constructor(
        private readonly mailService: MailerService,
        private readonly prisma: PrismaService
    ) { }

    async sendMail(messageSend: string, subjectSend: string, type: string) {
        // Validaciones básicas
        if (!messageSend || !subjectSend) {
            throw new Error('Todos los campos son obligatorios.');
        }

        try {

            var randomEmails = []

            if (type == 'puquina') {
                randomEmails.push(
                    "fabrizioquispe1900@gmail.com"
                )
            }
            else {
                if (type == 'reclamaciones') {
                    const texto = messageSend
                    const textoSinHTML = texto.replace(/<[^>]+>/g, '');
                    const textoConComas = textoSinHTML
                        .replace(/Documento:/g, ',')
                        .replace(/Nombre:/g, ',')
                        .replace(/Apoderado:/g, ',')
                        .replace(/Apellidos:/g, ',')
                        .replace(/Correo:/g, ',')
                        .replace(/Celular:/g, ',')
                        .replace(/Mensaje:/g, ',');
                    const textoLimpio = textoConComas.replace(/^,|,$/g, '');
                    const arrayDatos = textoLimpio.split(',').map(item => item.trim()).filter(item => item !== '');

                    console.log(arrayDatos)

                    const hasApoderado = arrayDatos.length == 7

                    const numberOfRecords = await this.prisma.correos.findMany({
                        where: {
                            codigo: {
                                startsWith: 'R'
                            }
                        },
                        orderBy: {
                            id: 'desc'
                        },
                        take: 1
                    })

                    var codigo = 'R0000001'

                    if (numberOfRecords.length > 0) {

                        const lastCod = numberOfRecords[0].codigo

                        let numero = parseInt(lastCod.replace('R', ''));

                        // Sumarle 1 al número
                        numero += 1;

                        // Asegurarse de que el número tenga ceros a la izquierda (por ejemplo, 7 dígitos)
                        codigo = 'R' + numero.toString().padStart(7, '0');
                    }

                    const dataJson = {
                        documento:arrayDatos[0],
                        nombre: arrayDatos[1] + " " + (hasApoderado ? arrayDatos[3] : arrayDatos[2]),
                        apoderado: hasApoderado ? arrayDatos[2] : "",
                        correo: hasApoderado ? arrayDatos[4] : arrayDatos[3],
                        telefono:hasApoderado ? arrayDatos[5] : arrayDatos[4],
                        descripcion: hasApoderado ? arrayDatos[6] : arrayDatos[5],
                        codigo: codigo,
                    }

                    const response = await this.prisma.correos.create({
                        data: dataJson
                    });
                    randomEmails.push(
                        "fabrizioquispe1900@gmail.com"
                    )

                }
                else {
                    randomEmails.push(
                        "wramirez@brisasdeltiticaca.com",
                        "fabrizioquispe1900@gmail.com",
                        "luis05medina22@gmail.com",
                        /* "sistemas@brisasdeltiticaca.com" */
                    )
                }
                
            }

            console.log(randomEmails)

            const randomNames = Math.floor(Math.random() * randomEmails.length);

            const messageIncludeCode = '<b>Codigo: </b> ' + codigo + '<br />' + messageSend

            const response = await this.mailService.sendMail({
                from: process.env.EMAIL_USERNAME,
                to: randomEmails[randomNames],
                subject: subjectSend,
                html: messageIncludeCode
            });
            console.log('Correo enviado:', response);

            return true;
        } catch (error) {
            console.error('Error al enviar correo:', error);
            throw new Error('No se pudo enviar el correo.'); // Lanza un error para manejarlo más arriba si es necesario
        }
    }


}