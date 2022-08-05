class Pedido {

  constructor(
    private produto: string, 
    protected valorTotal: number, 
    public previsaoEntrega: Date
  ) { }

}

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2022-09-01"));

console.log(meuPedido);