import Knex from 'knex';

export async function seed(Knex: Knex) {
   await Knex('items').insert([
        { title: 'Lâmpadas', },
        { title: 'Pilhas e Baterias',  },
        { title: 'Papéis e Papelão',  },
        { title: 'Residuos Eletronicos',  },
        { title: 'Residuos Organicos',  },
        { title: 'óleo de Cozinha',  },
    ]);
}