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
    .first()
    .then((assassins) => {
      if (!assassins) {
        return next();
      }

      res.render('assassinsViews/index_assassins', {assassins});
    })
    .catch((err) => {
      next(err);
    });
});


router.post('/assassins/posted', (req, res, next) => {

  knex('assassins')
    .insert({ 
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

router.patch('/assassins/:assassin_id', (req, res, next) => {
  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .first()
    .then((assassins) => {
      if (!assassins) {
        return next();
      }

      return knex('assassins')
        .update({ full_name: req.body.full_name, code_names: req.body.code_names, weapon: req.body.weapon, contact_info: req.body.contact_info, age: req.body.age, price: req.body.price, rating: req.body.rating, kills: req.body.kills }, '*')
        .where('assassin_id', req.params.assassin_id);
    })
    .then((assassins) => {
      res.send(assassins);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/assassins/:assassin_id', (req, res, next) => {
  let assassin;

  knex('assassins')
    .where('assassin_id', req.params.assassin_id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      assassin = row;

      return knex('assassins')
        .del()
        .where('assassin_id', req.params.assassin_id);
    })
    .then(() => {
      delete assassin.assassin_id;
      res.send(assassin.assassin_id);
    });
  });

module.exports = router;