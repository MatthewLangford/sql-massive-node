let app = require('./server');
let db = app.get('db');
let pw = require('./pw');
let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: pw.pw,
    database: 'yoda'
});
con.connect(err =>{
    if(err){
        console.log('Error connecting to Db');
        return
    }
    console.log('Connection Established');
});

module.exports = {
    Create: (req, res, next)=>{
        // let db = app.get('db');
        // db.create_product([req.body.id, req.body.name, req.body.description, req.body.price, req.body.imageUrl],(err, products)=> {
        //     //console.log(products);
        //     res.json(products);
        // });
        let newProduct = {name: req.body.name, description: req.body.description, price: req.body.price, imageUrl: req.body.imageUrl};
        con.query('INSERT INTO products SET ?', newProduct, (err, rows) =>{
            if(err){
                console.log(err)
            }else {
                console.log("data recieved");
                res.send('added!')
            }
        })

    },

    getProducts: (req, res, next)=>{
        // let db = app.get('db');
        // db.read_products((err, products) => {
        //     //console.log(products);
        //     res.json(products);
        // });
        con.query('SELECT * FROM products', (err, rows)=>{
            if(err) throw err;
            console.log("data recieved");
            res.json(rows);
        })

    },

    getProductById: (req, res, next)=>{
        // let db = app.get('db');
        // db.read_product([req.params.id], (err, product) =>{
        //     //console.log(err,product);
        //     res.json(product)
        // })
        con.query('SELECT * FROM products where id = ?', [req.params.id], (err, result) =>{
            if(err){
                console.log(err);
            }else{
                console.log('found');
                res.json(result);
            }
        })
    },

    updateDesc: (req, res, next)=>{
        // let db = app.get('db');
        // db.update_product([req.body.name, req.body.description, req.body.price, req.params.id], (err, products)=>{
        //     //console.log(err, products);
        //     res.json('ok');
        // })
        con.query('UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?',
            [req.body.name, req.body.description, req.body.price, req.params.id], (err, result)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('updated');
                    res.json('updated')
                }
            })
    },

    deleteProduct: (req, res, next)=>{
        // let db = app.get('db');
        // db.delete_product([req.params.id], (err, products)=>{
        //     res.json('deleted');
        // })
        con.query('DELETE FROM products WHERE id = ?',
            [req.params.id], (err, result)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('deleted');
                    res.json('deleted')
                }
            })
    }
};
