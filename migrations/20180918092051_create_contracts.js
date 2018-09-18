
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contracts', (table) => {
        table.increments('contract_id').primary();
        table.string('target_name').notNullable();
        table.string('target_location').notNullable();
        table.string('target_photo').notNullable();
        table.integer('target_security').notNullable();
        table.string('client_name').notNullable();
        table.integer('budget').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contracts');
};
