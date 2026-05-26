export class Produto {
    id: number;
    nome: string;
    preco: number;
    estoque: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = 0;
    }

    adicionarEstoque(qtd: number) {
        this.estoque += qtd;
    }

    get() {
        return this.id, this.nome, this.preco, this.estoque
    }
}