export interface Product {
  nome: string;
  genero: string;
  tamanho: Array<string>;
  valor: number;
  imagem: Array<string>;
  url?: Array<string>;
  key?: string;
}
