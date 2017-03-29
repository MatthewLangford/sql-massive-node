let app = require('./server');
let db = app.get('db');

module.exports = {
    Create: (req, res, next)=>{
        let db = app.get('db');
        db.create_product([req.body.id, req.body.name, req.body.description, req.body.price, req.body.imageUrl],(err, products)=> {
            //console.log(products);
            res.json(products);
        });

    },

    getProducts: (req, res, next)=>{
        let db = app.get('db');
        db.read_products((err, products) => {
            //console.log(products);
            res.json(products);
        });

    },

    getProductById: (req, res, next)=>{
        let db = app.get('db');
        db.read_product([req.params.id], (err, product) =>{
            //console.log(err,product);
            res.json(product)
        })
    },

    updateDesc: (req, res, next)=>{
        let db = app.get('db');
        db.update_product([req.body.name, req.body.description, req.body.price, req.params.id], (err, products)=>{
            //console.log(err, products);
            res.json('ok');
        })
    },

    deleteProduct: (req, res, next)=>{
        let db = app.get('db');
        db.delete_product([req.params.id], (err, products)=>{
            res.json('deleted');
        })
    }
};
