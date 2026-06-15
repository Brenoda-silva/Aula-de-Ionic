import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express();
app.use(cors());
app.use(express.json());

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

app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err.message);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
        res.json(results);
    });
});

app.post('/produtos', (req, res) => {
    const novoProduto = {
        id: Date.now(),
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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
