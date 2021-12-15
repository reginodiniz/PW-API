const knex = require("knex");
const config = require("../knexfile");
const environment = process.env.DB_ENV || "Development";

module.exports = knex(config[environment]);/*configuração de desenvovimento 
no knexfile//usar acesso ao banco, um novo objeto do knex,
 e pra isso faz se uma exportação.*/