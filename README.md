# 📘 Sistema de Mensagens com Área Administrativa

## 🧩 Visão Geral
Este projeto é um sistema web simples que permite:
- Usuários enviarem mensagens via formulário.
- Administradores acessarem uma área restrita.
- Visualizar, marcar como lida e excluir mensagens recebidas.

---

## 🗂️ Estrutura de Arquivos

| Arquivo          | Função                                                                 |
|------------------|------------------------------------------------------------------------|
| `contato.html`   | Página pública para envio de mensagens.                                |
| `admin.html`     | Página de login para acesso à área administrativa.                     |
| `mensagens.html` | Painel administrativo com listagem e gerenciamento das mensagens.      |
| `api.js`         | Arquivo JavaScript que faz a comunicação com a API REST.               |
| `default.css`    | Estilização básica das páginas.                                        |
| `jquery-3.6.4.min.js` | Biblioteca jQuery usada para facilitar manipulação do DOM.     |

---

## 🌐 Funcionalidades

### 1. **Envio de Mensagens (`contato.html`)**
- Formulário com campos: Nome, E-mail e Mensagem.
- Ao clicar em "Enviar", os dados são enviados para a API via `inserirMensagem()`.

### 2. **Login Administrativo (`admin.html`)**
- Formulário com campos: E-mail e Senha.
- Validação feita com `validarUsuario()`.
- Se login for válido, redireciona para `mensagens.html`.

### 3. **Painel de Mensagens (`mensagens.html`)**
- Lista todas as mensagens recebidas usando `obterMensagens()`.
- Mensagens não visualizadas aparecem em **negrito**.
- Botões de ação:
  - **Visualizar**: marca como lida (controle via `localStorage`).
  - **Excluir**: remove a mensagem diretamente da API com `excluirMensagem()`.

---

## 🔌 Integração com API

### Funções disponíveis em `api.js`:
- `obterMensagens()` → GET `/mensagens`
- `inserirMensagem(mensagem)` → POST `/mensagens`
- `validarUsuario(objLoginSenha)` → POST `/usuarios/validar`
- `excluirMensagem(id)` → DELETE `/mensagens/{id}`

---

## 🧪 Testes recomendados

1. Acesse `contato.html` e envie uma mensagem.
2. Vá para `admin.html` e faça login com:
3. Acesse `mensagens.html`:
   - Verifique se a mensagem aparece.
   - Marque como visualizada.
   - Exclua a mensagem e veja se ela desaparece.

---

## 📌 Observações
- O controle de visualização é feito localmente via `localStorage`.
- A exclusão é feita diretamente na API (persistente).
- O sistema é responsivo e acessível, com feedback dinâmico para o usuário.


Todas as operações são feitas com chamadas `fetch()` para a API hospedada em:

