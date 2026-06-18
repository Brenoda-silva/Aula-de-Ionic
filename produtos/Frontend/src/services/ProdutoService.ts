//import { produto, id } from "../models/Produto";

export class ProdutoService {

    baseUrl = "http://localhost:3000";

    //private chave = "produtos";

    //salvar(produtos: Produto[]) {
    //    const payload = produtos.map((produto) => produto.toJSON());
     //   localStorage.setItem(this.chave, JSON.stringify(payload));
    //}

    async listar() {
        const res = await fetch(`${this.baseUrl}/produtos`);
        return await res.json();
    }

    async buscar(id: number) {
    if (!id) throw new Error('ID inválido');

    try {
        const res = await fetch(`${this.baseUrl}/produtos/${id}`);

        if (!res.ok) {
            throw new Error(`Produto não encontrado: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Falha ao buscar produto:', error);
        throw error;
    }
}

    async adicionar(produto: any) {
        await fetch(`${this.baseUrl}/produtos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
    }

    async atualizar(id: number, produtos: any) {
    try {
        const response = await fetch(`${this.baseUrl}/produtos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produtos)
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar produto: ${response.status}`);
        }

        return await response.json(); // retorna o dado atualizado
    } catch (error) {
        console.error('Falha na requisição atualizar:', error);
        throw error; // repassa para quem chamou tratar na UI
    }
}

    async remover(id: number) {
        await fetch(`${this.baseUrl}/produtos/${id}`, {
            method: 'DELETE'
        });
    }
} 