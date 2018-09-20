let express = require('express');
let app = express();
const knex = require('./db/knex');
const PORT = process.env.PORT || 4000;
const path = require('path');
const bodyParser = require('body-parser');


app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

let assassins = require('./routes/assassins_routes');
let contracts = require('./routes/contracts_routes');

app.use(assassins);
app.use(contracts);


app.get('/', (req, res, next) => {
    res.render('index');
  });


app.use(express.static('comps'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // app.use(cors());


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
  



// app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
console.log("listening on port: ", PORT);
});

module.exports = app;