'use strict'

const express = require('express');
const router = express.Router();

/* Método Get  */

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        author: "BioInformatica Labs",
        version: "0.0.1"
    });
});

module.exports = router;
