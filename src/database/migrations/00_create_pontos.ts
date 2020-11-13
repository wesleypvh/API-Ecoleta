import Knex from 'knex';

export async function up(knex: Knex ) {
    return knex.schema.createTable('pontos', table => {

        table.increments('id').primary();
        table.string('image').nullable();
        table.string('nome').nullable();
        table.string('email').nullable();
        table.string('whatsapp').nullable();
        table.decimal('lagitude').nullable();
        table.decimal('longitude').nullable();
        table.string('cidade').nullable();
        table.string('uf', 2).nullable();
       
     });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('pontos');

}