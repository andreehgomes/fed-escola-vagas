export class NewClass {
  nome: string;
  turno: string;
  vagas: number;
}

export class Class extends NewClass {
  key?: string;
}
