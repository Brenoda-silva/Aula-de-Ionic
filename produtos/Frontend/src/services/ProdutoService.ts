import { Produto, IProduto } from "../models/Produto";

export class ProdutoService {

    private chave = "produtos";

    salvar(produtos: Produto[]) {
        const payload = produtos.map((produto) => produto.toJSON());
        localStorage.setItem(this.chave, JSON.stringify(payload));
    }

    listar(): Produto[] {
        const dados = localStorage.getItem(this.chave);

        if (!dados) return [];

        try {
            const lista = JSON.parse(dados) as IProduto[];
            return lista.map(Produto.from);
        } catch {
            return [];
        }
    }

    
    adicionarProduto(produto: Produto) {
        const lista = this.listar();
        lista.push(produto);
        this.salvar(lista);
    }

    remover(id: string) {
        const lista = this.listar().filter((produto) => produto.id !== id);
        this.salvar(lista);
        return lista;
    }
}