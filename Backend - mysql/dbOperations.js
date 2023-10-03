const User = require('./user');

async function criarUsuario(nome, email) {
    try {
        const novoUsuario = await User.create({
            nome: nome,
            email: email
        });
        return novoUsuario;
    } catch (error) {
        throw error;
    }
}

async function listarUsuarios() {
    try {
        const usuarios = await User.findAll();
        return usuarios;
    } catch (error) {
        throw error;
    }
}

async function encontrarUsuarioPorId(id) {
    try {
        const usuario = await User.findByPk(id);
        return usuario;
    } catch (error) {
        throw error;
    }
}

async function atualizarUsuario(id, novosDados) {
    try {
        const usuario = await User.findByPk(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado.');
        }

        // Atualizar os campos necessários
        await usuario.update(novosDados);
        return usuario;
    } catch (error) {
        throw error;
    }
}

async function excluirUsuarioPorId(id) {
    try {
        const usuario = await User.findByPk(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado.');
        }

        await usuario.destroy();
        return usuario;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    criarUsuario,
    listarUsuarios,
    encontrarUsuarioPorId,
    atualizarUsuario,
    excluirUsuarioPorId
};

