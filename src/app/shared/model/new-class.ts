export class NewClass {
  nome: string;
  turno: string;
  vagas: number;
  listaDeEspera?: Array<EnterWaitList> = [];
}

export class Class extends NewClass {
  key?: string;
}

export class EnterWaitList {
  nome: string;
  telefone: string;
  vagas: string;
}
