export interface Categorias {
    nombre: string;
    comidas: Comidas[];  // Array de objetos Comidas
}

export interface Comidas {
    idUser: number;
    nombre: string;         // Agregado para el nombre de la comida
    descripcion: {
        'en': string,
        'es': string
    },    precio?: number;        // Agregado como opcional
    categoriaId: number;
}
