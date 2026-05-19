export class Tarefa {
    nome: string;
    descricao: string;
    concluir: boolean;

    constructor ( nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        this.concluir =  false;
    }

    public get() {
        return this.nome, this.descricao, this.concluir
        
    }
}