const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/contracts', (req, res, next) => {
  knex('contracts')
    .orderBy('contract_id')
    .then((contracts) => {
      res.render('contractsViews/index_contracts', {contracts});
    })
    .catch((err) => {
      next(err);
    });
});


router.get('/contracts/:contract_id', (req, res, next) => {
  knex('contracts')
    .where('contract_id', req.params.contract_id)
    .then((contracts) => {
      if (!contracts) {
        return next();
      }

      res.render('contractsViews/show_contract', {contracts});
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/new_contract', (req, res, next) => {
  res.render('contractsViews/new_contract');
});


router.post('/contracts/posted', (req, res, next) => {

  knex('contracts')
    .insert({ 
      target_name: req.body.target_name, 
      target_location: req.body.target_location,
      target_photo: req.body.target_photo || 'https://gifer.com/i/VCjc.gif',
      target_security: req.body.target_security, 
      client_name: req.body.client_name, 
      budget: req.body.budget, 
      complete: req.body.complete}, '*')
    .then(() => {
      knex('contracts')
      .orderBy('contract_id')
      .then((contracts) => {
      res.render('contractsViews/index_contracts', {contracts});
    })
  })
    .catch((err) => {
      next(err);
    });
});

router.get('/update_contract/:contract_id', (req, res, next) => {
  knex('contracts')
  .where('contract_id',req.params.contract_id)
  .then((contracts) => {
    if(!contracts) {
      return next();
    }
    res.render('contractsViews/update_contract', {contracts});
})
  .catch((err) => {
    next(err);
  })
})

router.post('/update_contract/:contract_id', (req, res, next) => {
  knex('contracts')
    .where('contract_id', req.params.contract_id)
    .then(() => {
       knex('contracts')
        .update({ 
            target_name: req.body.target_name, 
            target_location: req.body.target_location,
            target_photo: req.body.target_photo,
            target_security: req.body.target_security, 
            client_name: req.body.client_name, 
            budget: req.body.budget, 
            complete: req.body.complete}, '*')
        .where('contract_id', req.params.contract_id)
        .then(() => {
          knex('contracts')
          .orderBy('contract_id')
          .then((contracts) => {
          res.render('contractsViews/index_contracts', {contracts});
        })
      })
        .catch((err) => {
          next(err);
        });
    })
});

router.post('/delete_contract/:contract_id', function(req, res) {
  let row;
  knex('contracts')
    .where('contract_id', req.params.contract_id)
    .then((contracts)=> {
      row = contracts;
      return knex('contracts')
      .del()
      .where('contract_id', req.params.contract_id);
    })
    .then(() => {
      delete row.contract_id;
      knex('contracts')
          .orderBy('contract_id')
          .then((contracts) => {
      res.render('contractsViews/index_contracts', {contracts});
    })
  })
    
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/active_contracts', (req, res, next) => {
  knex('contracts')
    .orderBy('contract_id')
    .then((contracts) => {
      res.render('contractsViews/active_contracts', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/completed_contracts', (req, res, next) => {

  knex('contracts')
    .orderBy('contract_id')
    .then((contracts) => {
      res.render('contractsViews/completed_contracts', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
  });

  router.get('/done_contracts/:contract_id', (req, res, next) => {
    knex('contracts')
    .update({complete: true})
    .where('contract_id', req.params.contract_id)
      .then(() => {
        knex('contracts')
        .orderBy('contract_id')
        .then((contracts) => {
        res.render('contractsViews/index_contracts', {contracts});
      })
    })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
      });
    });



  

module.exports = router;