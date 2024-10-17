export interface TomosContenido {
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
  tomoId: number; // Referencia al ID del tomo al que pertenece
  tomo: Tomos; // Relación con el modelo Tomos
}
export interface Tomos {
  id: number;
  titulo: {
    en: string;
    es: string;
  };
  image: string;
}

export interface MessageTomos {
  code: number;
  message: string;
}
