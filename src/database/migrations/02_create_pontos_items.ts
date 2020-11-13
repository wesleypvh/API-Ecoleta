import Knex from 'knex';

export async function up(knex: Knex ) {
    return knex.schema.createTable('pontos_items', table => {

        table.increments('id').primary();

        table.integer('pontos_id')
        .notNullable()
        .references('id')
        .inTable('pontos')
        ;

        table.integer('items_id')
        .notNullable()
        .references('id')
        .inTable('items')
        ;
        
       
     });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('pontos_items');

}