export interface IProduto {
    id: string;
    nome: string;
    preco: number;
    estoque: number;
}

export class Produto implements IProduto {
    id: string;
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string, preco: number, estoque = 0, id?: string) {
        this.id = id ?? (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : String(Date.now()));
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    adicionarEstoque(qtd: number) {
        this.estoque = Math.max(0, this.estoque + qtd);
    }

    toJSON(): IProduto {
        return {
            id: this.id,
            nome: this.nome,
            preco: this.preco,
            estoque: this.estoque,
        };
    }

    static from(data: IProduto): Produto {
        return new Produto(data.nome, data.preco, data.estoque, data.id);
    }
}