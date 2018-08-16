'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Módulo Get - 0.25 - 03:23
exports.get = async () => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug  = (slug) => {
    return Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
}

exports.getById  = (id) => {
    return Product
        .findById(id);
}
 
exports.getByTag  = (tag) => {
    return Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
}

exports.create = (data) => {
    var product = new Product(data);
            return product.save();
};

exports.update = (id, data) => {
    //message: 'Método Put Testando antes do return';
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                sluge: data.sluge
            }
        });
}

exports.delete = (id) => {
    return Product
    .findOneAndRemove(id);
} 