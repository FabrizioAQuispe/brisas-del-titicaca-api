export interface Danzas {
    nombre: {
        'en': string,
        'es': string
    },
    descripcion: {
        'en': string,
        'es': string
    },
    image: string,
    slug: string
    video: string | null;
}


export interface MensajeDanzas {
    status: number,
    message: string
}

export interface MensajeActualizadoDanzas {
    status: number,
    message: string
}

export interface MensajeEliminadoDanzas {
    status: number,
    message: string
}