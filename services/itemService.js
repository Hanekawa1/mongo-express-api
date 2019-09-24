const item = require('../models/item');

item.methods(['get', 'post', 'put', 'delete']);

item.updateOptions({new: true, runValidators: true});

module.exports = item;
