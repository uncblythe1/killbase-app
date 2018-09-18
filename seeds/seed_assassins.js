exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {

      // Inserts seed entries
      return knex('assassins').insert([
        {
          "full_name": "Alexander Duggan",
          "code_names": "The Jackal",
          "weapon": "Sniper rifle",
          "contact_info": "jackal@gmail.com",
          "age": 31,
          "price": 45,
          "rating": 7.5,
          "kills": 28
        },
        {
          "full_name": "Anton Chigurh",
          "code_names": "Old Man",
          "weapon": "Pneumatic bolt gun",
          "contact_info": "pneujackcity@gmail.com",
          "age": 52,
          "price": 40,
          "rating": 9,
          "kills": 72
        },
        {
          "full_name": "",
          "code_names": "Ghost Dog",
          "weapon": "Pistol",
          "contact_info": "ghostdog@gmail.com",
          "age": 28,
          "price": 20,
          "rating": 6.5,
          "kills": 35
        },
        {
          "full_name": "Jason Bourne",
          "code_names": "",
          "weapon": "Parkour",
          "contact_info": "jb@gmail.com",
          "age": 27,
          "price": 25,
          "rating": 7,
          "kills": 48
        },
        {
          "full_name": "John Wick",
          "code_names": "Baba Yaga",
          "weapon": "Lots of guns",
          "contact_info": "babayaga@gmail.com",
          "age": 35,
          "price": 50,
          "rating": 9.5,
          "kills": 433
        },
        {
          "full_name": "Jules Winnfield",
          "code_names": "",
          "weapon": "Pistol",
          "contact_info": "bmf@gmail.com",
          "age": 26,
          "price": 15,
          "rating": 6.5,
          "kills": 13
        },
        {
          "full_name": "Leon",
          "code_names": "The Professional",
          "weapon": "Everything",
          "contact_info": "leon@gmail.com",
          "age": 41,
          "price": 30,
          "rating": 8.5,
          "kills": 87
        },
        {
          "full_name": "Nikita Mears",
          "code_names": "Nikita",
          "weapon": "Silenced pistols",
          "contact_info": "nikita@gmail.com",
          "age": 28,
          "price": 30,
          "rating": 7,
          "kills": 32
        },
        {
          "full_name": "Nikita Mears",
          "code_names": "La Femme Nikita",
          "weapon": "Silenced pistols",
          "contact_info": "nikita@gmail.com",
          "age": 28,
          "price": 30,
          "rating": 7,
          "kills": 32
        },
        {
          "full_name": "Pickle Rick",
          "code_names": "Solenya",
          "weapon": "Lasers and office supplies",
          "contact_info": "rsanchez@gmail.com",
          "age": 60,
          "price": 0,
          "rating": 8,
          "kills": 24
        }
      ]);
    });
  }