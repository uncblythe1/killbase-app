exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {

      // Inserts seed entries
      return knex('assassins').insert([
        {
          "photo": 'https://images.pexels.com/photos/1108598/pexels-photo-1108598.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/226325/pexels-photo-226325.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/1079458/pexels-photo-1079458.jpeg?auto=compress&cs=tinysrgb&h=350',
          "full_name": "YO",
          "code_names": "Ghost Dog",
          "weapon": "Pistol",
          "contact_info": "ghostdog@gmail.com",
          "age": 28,
          "price": 20,
          "rating": 6.5,
          "kills": 35
        },
        {
          "photo": 'https://images.pexels.com/photos/542514/pexels-photo-542514.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/458497/pexels-photo-458497.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/1398403/pexels-photo-1398403.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/959284/pexels-photo-959284.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          "photo": 'https://images.pexels.com/photos/1327479/pexels-photo-1327479.jpeg?auto=compress&cs=tinysrgb&h=350',
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