import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'



const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConection({
    host: 'localhost',
    user: 'root',
    pasaword: 'root',
    database: 'produtos'

})

const PORT = 3000
app.get("/produtos", (req, res) => {
    const dados = fs.readFileSync(arquivo);
    const produtos = JSON.parse(dados);
    res.json(produtos);
});

app.post("/produtos", (req, res) => {
    const dados = fs.readFileSync(arquivo);
    const produtos = JSON.parse(dados);

    const novoProduto = {
        id: Date.now(),
        ...req.body
    };

    produtos.push(novoProduto);

    fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));

    res.json(novoProduto);
});

app.listen(PORT, () => {
    console.log('servido rodando na porta {PORT}')
})