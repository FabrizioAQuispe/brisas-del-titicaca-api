export interface TomosContenido  extends Contenido{
  tomos:Tomos
}

export interface Contenido{
  id: number;
  titulo?: {
    en: string;
    es: string;
  };
  descripcion?: {
    en: string;
    es: string;
  };
  leyenda?: {
    en: string;
    es: string;
  };
  image?: string;
  tomoId: number; 
}
export interface Tomos {
  id: number;
  titulo: {
    'en': string,
    'es': string
  },
  image: string;
}

export interface MessageTomos {
  code: number
  message: string
  data?: any
}