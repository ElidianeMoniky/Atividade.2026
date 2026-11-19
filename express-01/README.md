# API de Gerenciamento de Tarefas

# 

# Projeto desenvolvido com Node.js, Express e PostgreSQL para gerenciamento de tarefas.

# 

# Tecnologias utilizadas

# Node.js

# Express

# PostgreSQL

# Sequelize

# Zod

# dotenv

# Funcionalidades

# 

# A API permite:

# 

# Criar tarefas.

# Listar todas as tarefas.

# Buscar uma tarefa pelo ID.

# Atualizar uma tarefa.

# Excluir uma tarefa.

# Instalação

# 

# Clone o repositório:

# 

# bash

# git clone https://github.com/ElidianeMoniky/Atividade.2026.git

# 

# 

# Entre na pasta do projeto:

# 

# bash

# cd Atividade.2026/express-01

# 

# 

# Instale as dependências:

# 

# bash

# npm install

# 

# Configuração

# 

# Crie um arquivo .env na pasta express-01:

# 

# env

# PORT=3000

# DATABASE\_URL=sua\_url\_de\_conexao\_postgresql

# 

# 

# Substitua sua\_url\_de\_conexao\_postgresql pela URL de conexão do seu banco PostgreSQL.

# 

# Executar o projeto

# 

# Para iniciar em modo de desenvolvimento:

# 

# bash

# npm run dev

# 

# 

# Para iniciar normalmente:

# 

# bash

# npm start

# 

# 

# A API estará disponível em:

# 

# http://localhost:3000

# 

# Endpoints

# Método	Rota	Funcionalidade

# GET	/	Verificar funcionamento da API

# POST	/tarefas	Criar tarefa

# GET	/tarefas	Listar tarefas

# GET	/tarefas/:objectId	Buscar tarefa

# PUT	/tarefas/:objectId	Atualizar tarefa

# DELETE	/tarefas/:objectId	Excluir tarefa

# Exemplo de criação de tarefa

# 

# Requisição POST:

# 

# json

# {

# &#x20; "descricao": "Estudar Node.js",

# &#x20; "concluida": false

# }

# 

# Validações

# 

# Os dados enviados são validados utilizando Zod.

# 

# A descrição é obrigatória na criação.

# A descrição não pode ficar vazia.

# O campo concluida deve ser booleano.

# O ID da tarefa deve ser um UUID válido.

# Banco de dados

# 

# O projeto utiliza PostgreSQL com Sequelize para conexão, mapeamento e persistência dos dados.

# 

# Autora

# 

# Desenvolvido por Elidiane Moniky.

