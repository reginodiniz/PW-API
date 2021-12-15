exports.up = function(knex) {
    return knex.schema.createTable("valor",(table) => {
        table.increments().primary();
        table.decimal("valor");
        table.timestamps(true,true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("valor");
};
