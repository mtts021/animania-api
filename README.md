# Instalar e rodar o projeto

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Node.js LTS v16 (ou qualquer versão superior)
- Docker

## Para executar a api, siga os seguintes passos:

### Clone o projeto com Git:
```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
```
### Instale as dependências do projeto:
```bash
npm install
```
### Execute o docker-compose para subir o banco de dados:
```bash
docker-compose up -d
```
### Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```
### Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
### O servidor estará disponível em http://localhost:3000.

## Testando a API
**Para testar a API, é recomendável usar alguma ferramenta de testes de API, como o Postman e ThunderClient ou Insomnia.**

## Os endpoints disponíveis na API são:

- ### /admin/:id: retorna os dados de um admin específico pelo ID.
- ### /sessions: cria uma nova sessão de login para um admin.

## Documentação:

- ### A API é documentada utilizando o swagger e, com o projeto rodando, será possível verificá-lo em http://localhost:3001/api-docs/
