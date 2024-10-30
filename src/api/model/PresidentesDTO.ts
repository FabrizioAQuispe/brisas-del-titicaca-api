export interface Presidentes {
    id: number;
    nombre: string;
    fecha: string;
    descripcion?: string;  // Utilizamos Record para definir un objeto JSON genérico
    imagePresident?: string;
    imageJunta?: string;
  }

export interface MessagePresidentes {
    code:number,
    message:string
}