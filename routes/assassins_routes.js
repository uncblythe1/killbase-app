const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/assassins', (req, res, next) => {
  knex('assassins')
    .orderBy('assassin_id')
    .then((assassins) => {
      res.render('assassinsViews/index_assassins', {assassins});
    })
    .catch((err) => {
      next(err);
    });
});


router.get('/assassins/:assassin_id', (req, res, next) => {
  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .then((assassins) => {
      if (!assassins) {
        return next();
      }

      res.render('assassinsViews/show_assassin', {assassins});
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/new_assassin', (req, res, next) => {
  res.render('assassinsViews/new_assassin');
});


router.post('/assassins/posted', (req, res, next) => {

  knex('assassins')
    .insert({ 
      photo: req.body.photo || 'https://i.pinimg.com/originals/dc/3e/a0/dc3ea01b201ad8607ad93f1211ee5b83.gif',
      full_name: req.body.full_name, 
      code_names: req.body.code_names, 
      weapon: req.body.weapon, 
      contact_info: req.body.contact_info, 
      age: req.body.age, 
      price: req.body.price, 
      rating: req.body.rating, 
      kills: req.body.kills}, '*')
    .then(() => {
      knex('assassins')
      .orderBy('assassin_id')
      .then((assassins) => {
      res.render('assassinsViews/index_assassins', {assassins});
    })
  })
    .catch((err) => {
      next(err);
    });
});

router.get('/update_assassin/:assassin_id', (req, res, next) => {
  knex('assassins')
  .where('assassin_id',req.params.assassin_id)
  .then((assassins) => {
    if(!assassins) {
      return next();
    }
    res.render('assassinsViews/update_assassin', {assassins});
})
  .catch((err) => {
    next(err);
  })
})

router.post('/update_assassin/:assassin_id', (req, res, next) => {
  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .then(() => {
       knex('assassins')
        .update({ 
        full_name: req.body.full_name,
        code_names: req.body.code_names,
        weapon: req.body.weapon,
        contact_info: req.body.contact_info,
        age: req.body.age, price: req.body.price,
        rating: req.body.rating, kills: req.body.kills }, '*')
        .where('assassin_id', req.params.assassin_id)
        .then((assassins) => {
          res.render('assassinsViews/index_assassins', {assassins});
        })
        .catch((err) => {
          next(err);
        });
    })
});

router.post('/delete_assassin/:assassin_id', function(req, res) {
  let row;
  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .then((assassins)=> {
      row = assassins;
      return knex('assassins')
      .del()
      .where('assassin_id', req.params.assassin_id);
    })
    .then(() => {
      delete row.assassin_id;
      knex('assassins')
          .orderBy('assassin_id')
          .then((assassins) => {
      res.render('assassinsViews/index_assassins', {assassins});
    })
  })
    
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

  

module.exports = router;