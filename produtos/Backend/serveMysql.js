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
    const { id } = req.params;
    const atualizarProduto = req.body;

    db.query(
        'UPDATE produtos SET ? WHERE id = ?',
        [atualizarProduto, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    erro: 'Produto não encontrado'
                });
            }

            res.json({
                id,
                ...atualizarProduto
            });
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
