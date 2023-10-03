const express = require('express');
require('dotenv').config();
const { criarUsuario, listarUsuarios, encontrarUsuarioPorId, atualizarUsuario, excluirUsuarioPorId } = require('./dbOperations');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/usuarios', async (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        const novoUsuario = await criarUsuario(nome, email);
        return res.status(201).json({ message: 'Usuário criado com sucesso.', usuario: novoUsuario });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        return res.status(200).json({ usuarios });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const usuario = await encontrarUsuarioPorId(userId);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        return res.status(200).json({ usuario });
    } catch (error) {
        console.error('Erro ao encontrar usuário por ID:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const userId = req.params.id;
    const novosDados = req.body;

    try {
        const usuarioAtualizado = await atualizarUsuario(userId, novosDados);
        return res.status(200).json({ message: 'Usuário atualizado com sucesso.', usuario: usuarioAtualizado });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const usuarioExcluido = await excluirUsuarioPorId(userId);
        return res.status(200).json({ message: 'Usuário excluído com sucesso.', usuario: usuarioExcluido });
    } catch (error) {
        console.error('Erro ao excluir usuário:', error.message);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
