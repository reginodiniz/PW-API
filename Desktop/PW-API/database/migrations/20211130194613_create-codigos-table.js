
exports.up = function(knex) {
    return knex.schema.createTable("codigos",(table) => {
        table.increments().primary();
        table.varchar("codigo");
        table.decimal("valor");
        table.timestamps(true,true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("codigos");
};
