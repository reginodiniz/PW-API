
exports.up = function(knex) {
    return knex.schema.createTable("imagem",(table) => {
        table.increments().primary();
        table.string("imagem");
        table.timestamps(true,true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("imagem");
};
