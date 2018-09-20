
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contracts', (table) => {
        table.increments().primary();
        table.string('target_name', 60).notNullable();
        table.string('target_location', 60).notNullable();
        table.string('target_photo', 200).notNullable();
        table.integer('target_security', 60).notNullable().defaultTo(0);
        table.string('client_name', 60);
        table.integer('budget').notNullable()
        table.boolean('complete');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contracts');
};
