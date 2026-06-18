import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if (req.method === "OPTIONS") return res.sendStatus(204);
    next();
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'produtos'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
        process.exit(1);
    }
    console.log('MySQL conectado com sucesso');
});

const PORT = 3000;

app.get('/produtos/:id', (req, res) => {
    db.query('SELECT * FROM produtos WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(results[0]);
    });
});


app.post('/produtos', (req, res) => {
    const novoProduto = {
        ...req.body
    };

    db.query('INSERT INTO produtos SET ?', novoProduto, (err, result) => {
        if (err) {
            console.error('Erro ao inserir produto:', err.message);
            return res.status(500).json({ error: 'Erro ao inserir produto' });
        }

        res.json({
            id: result.insertId || novoProduto.id,
            ...novoProduto
        });
    });
});

app.put('/produtos/:id', (req, res) => {
    const { nome, preco, estoque } = req.body;
    const { id } = req.params; // ← estava faltando

    db.query(
        'UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?',
        [nome, preco, estoque, id], // ← parâmetros que estavam faltando
        (err, result) => {
            if (err) return res.status(500).json({ erro: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ erro: 'Produto não encontrado' });

            res.json({ id, nome, preco, estoque }); // ← variáveis corretas
        }
    );
});
app.delete('/produtos/:id', (req,res) => {
    db.query('DELETE FROM produtos WHERE id = ?',
        [req.params.id],
        () => res.sendStatus(200)
    );
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
