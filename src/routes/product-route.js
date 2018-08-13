'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

/* Método Get */
router.get('/', controller.get);

/* Método GetBySlug */
router.get('/:slug', controller.getBySlug);

/* Método GetById */
router.get('/admin/:id', controller.getById);

/* Método GetByTag */
router.get('/tags/:tag', controller.getByTag);

/* Método Post */
router.post('/', controller.post);

/* Método Put */ 
router.put('/:id', controller.put);

/* Método Delete */ 
router.delete('/', controller.delete);
//router.delete('/:id', controller.delete);

module.exports = router;



/*
router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});


/* Método Put 

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

/* Método Delete 

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

*/