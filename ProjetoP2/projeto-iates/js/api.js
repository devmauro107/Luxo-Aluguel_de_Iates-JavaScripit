function obterMensagens() {
    return fetch('https://app-p2-js-c88e9128234a.herokuapp.com/mensagens', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (!response.ok) throw new Error('Erro ao obter mensagens: ' + response.status);
        return response.json();
    })
    .catch(function(err) {
        console.error(err);
        return [];
    });
}

function inserirMensagem(mensagem) {
    // mensagem: { nome, email, mensagem }
    // Retorna uma Promise com o resultado do POST (texto ou JSON)

    return fetch('https://app-p2-js-c88e9128234a.herokuapp.com/mensagens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(mensagem)
    })
    .then(async function(response) {
        const text = await response.text();

        if (!response.ok) {
            throw new Error('Erro ao inserir mensagem: ' + response.status + ' - ' + text);
        }

        try {
            return JSON.parse(text);
        } catch (e) {
            console.warn("Resposta não é JSON. Conteúdo:", text);
            return { mensagem: text };
        }
    });
}

function validarUsuario(objLoginSenha) {
    // objLoginSenha: { email, senha }
    // Retorna uma Promise que resolve para true/false (ou false em caso de erro)

    return fetch('https://app-p2-js-c88e9128234a.herokuapp.com/usuarios/validar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(objLoginSenha)
    })
    .then(function(response) {
        if (!response.ok) {
            return false;
        }
        return response.json();
    })
    .catch(function(err) {
        console.error(err);
        return false;
    });
}
