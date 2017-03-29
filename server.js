let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let pw = require('pw');
let connectionString = 'postgres://postgres:'+ pw.pw +'@localhost/sandbox';
let massiveInstance = massive.connectSync({connectionString: connectionString});
let app = module.exports = express();
let productsCtrl = require('./productsCtrl');

app.set('db', massiveInstance);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
let db = app.get('db');


app.post('/api/product', productsCtrl.Create);

app.get('/api/products', productsCtrl.getProducts);

app.get('/api/product/:id', productsCtrl.getProductById);

app.put('/api/product/:id', productsCtrl.updateDesc);

app.delete('/api/product/:id', productsCtrl.deleteProduct);







app.listen(3000);