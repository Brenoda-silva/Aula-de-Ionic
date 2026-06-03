//import { produto, id } from "../models/Produto";

export class ProdutoService {

    baseUrl = "http://localhost:3000/produtos";

    //private chave = "produtos";

    //salvar(produtos: Produto[]) {
    //    const payload = produtos.map((produto) => produto.toJSON());
     //   localStorage.setItem(this.chave, JSON.stringify(payload));
    //}

    async listar() {
        const res = await fetch(`${this.baseUrl}/produtos`);
        return await res.json();
    }

    async adicionar(produto: any) {
        await fetch(`${this.baseUrl}/produtos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
    }

    async remover(id: number) {
        await fetch(`${this.baseUrl}/produtos/${id}`, {
            method: 'DELETE'
        });
    }
}