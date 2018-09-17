const express = require('express');
const app = express();
const knex = require('./db/knex');
const PORT = process.env.PORT || 5000;
const path = require('path');


// let assassins = require('./routes/shop_routes');
// let donuts = require('./routes/donut_routes');
// let employees = require('./routes/employee_routes');

// app.use(shops);
// app.use(donuts);
// app.use(employees);

app.get('/', (req, res, next) => {
    res.send('index');
  });

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// app.use((_req, res) => {
//     res.sendStatus(404);
//   });
  
// app.use((err, _req, res, _next) => {
// if (err.status) {
//     return res
//     .status(err.status)
//     .set('Content-Type', 'text/plain')
//     .send(err.message);
// }

// console.error(err.stack);
// res.sendStatus(500);
// });
  

// app.get('/', function(req, res){ res.redirect(index)});

// app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
console.log("listening on port: ", PORT);
});

module.exports = app;