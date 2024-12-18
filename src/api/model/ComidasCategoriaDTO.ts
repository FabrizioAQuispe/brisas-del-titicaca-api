export interface ComidasPublic extends Comidass {
    categoria: CategoriasPublic
}

export interface CategoriasPublic {
    id: number,
    nombre: string,
    descripcion: string,
}

export interface Comidass {
    id?: number,
    idUser: number,
    nombre: string,
    descripcion: {
        'en': string,
        'es': string
    }, precio?: number,
    categoriaId: number,
    image?: string,
}

