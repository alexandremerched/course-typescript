interface Modelo {
  id: number;
  created_at: number;
  updated_at: number;
}

interface Pessoa extends Modelo {
  nome: string;
  idade?: number;
}

interface Usuario extends Pessoa {
  email: string;
  senha: string;
}

const joao: Usuario = {
  email: "joao@hcode.com.br",
  id: 1,
  nome: "João Rangel",
  senha: "123456",
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
}