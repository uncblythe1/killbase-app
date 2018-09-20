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
      photo: req.body.photo,
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

router.get('/update_assassin', (req, res, next) => {
  res.render('assassinsViews/update_assassin');
});

router.post('/assassin/update', (req, res, next) => {
  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .first()
    .then((assassins) => {
      if (!assassins) {
        return next();
      }

      return knex('assassins')
        .update({ full_name: req.body.full_name, code_names: req.body.code_names, weapon: req.body.weapon, contact_info: req.body.contact_info, age: req.body.age, price: req.body.price, rating: req.body.rating, kills: req.body.kills }, '*')
        .where('assassin_id', req.params.assassin_id)
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
    })
});

router.delete('/assassins/:id', function(req, res) {
  knex('assassins')
    .select('id')
    .where('id', req.params.id)
    .first()
    .del()
    .then(function(assassins) {
      res.redirect('/assassins');
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

  

module.exports = router;