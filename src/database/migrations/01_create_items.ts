import Knex from 'knex';

export async function up(knex: Knex ) {
    return knex.schema.createTable('items', table => {

        table.increments('id').primary();
        table.string('image').nullable();
        table.string('title').nullable();
        
       
     });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('items');

}