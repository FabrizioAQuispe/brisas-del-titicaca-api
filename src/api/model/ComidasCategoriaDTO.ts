export interface ComidasPublic{
    id:number,
    idUser:number,
    nombre:string,
    descripcion?:string,
    precio?:number,
    categoriaId:number,
    image?:string,
    categoria:CategoriasPublic
}

export interface CategoriasPublic{
    id:number,
    nombre:string,
    descripcion:string
}