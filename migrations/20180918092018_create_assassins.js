
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assassins', (table) => {
        table.increments('assassin_id').primary();
        table.string('full_name');
        table.string('code_names').nullable();
        table.string('weapon').nullable();
        table.string('contact_info').nullable();
        table.integer('age').nullable();
        table.integer('price').nullable();
        table.float('rating').nullable();
        table.integer('kills').nullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
