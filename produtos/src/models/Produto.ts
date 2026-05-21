export class Produtos {
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = 0;
    }

    adicionarEstoque(qtd: number) {
        this.estoque += qtd;
    }

    get() {
        return this.nome, this.preco, this.estoque
    }
}