'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


/* Método Post  */
exports.post = (req, res, next) => {
    var product = new Product(req.body);
//  product.title = req.body.title;
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto', 
                data: e
            });

        });

};

/* Método Put */

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};
   
/* Método Delete */

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};

