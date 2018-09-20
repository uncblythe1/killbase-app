
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assassincontracts', function(table) {
        table.integer('assassin_id', 50);
        table.integer('contract_id', 50);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassincontracts');
};
