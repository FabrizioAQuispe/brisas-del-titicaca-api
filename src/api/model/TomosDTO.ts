export interface TomosContenido {
  id: number;
  titulo?: string;
  descripcion: string;
  leyenda: string;
  image?: string;
}

export interface Tomos {
  id: number;
  titulo: string;
  image: string;
}

export interface MessageTomos{
  code: number
  message: string

}