export interface TomosContenido {
    id: number;
    titulo: {
        'en': string,
        'es': string
      },
    descripcion: {
        'en': string,
        'es': string
    };
    leyenda: {
        'en': string,
        'es': string
    };
    image?: string;
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
  
  }