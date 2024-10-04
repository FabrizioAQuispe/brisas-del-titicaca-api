export interface Categorias {
    nombre: string;
    comidas: Comidas[];  // Array de objetos Comidas
}

export interface Comidas {
    idUser: number;
    nombre: string;         // Agregado para el nombre de la comida
    descripcion?: string;   // Agregado como opcional
    precio?: number;        // Agregado como opcional
    categoriaId: number;
}
