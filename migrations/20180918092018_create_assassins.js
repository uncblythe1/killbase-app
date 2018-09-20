
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assassins', (table) => {
        table.increments('assassin_id').primary();
        table.string('photo');
        table.string('full_name', 60);
        table.string('code_names', 60);
        table.string('weapon', 60).notNullable().defaultTo('Hands');
        table.string('contact_info', 100).notNullable().defaultTo('Untraceable');
        table.integer('age');
        table.integer('price').notNullable().defaultTo();
        table.float('rating').notNullable().defaultTo(0);
        table.integer('kills').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
