
exports.up = function(knex) {
  return knex.schema.createTable("clientes",(table) => {
      table.increments().primary();
      table.string("nome");
      table.varchar("codigo");
      table.decimal("valor",8,2);
      table.string("imagem");
      table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("clientes");
};
