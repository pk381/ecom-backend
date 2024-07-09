const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    itemsIds:{

    }

});

module.exports = mongoose.model('cart', Cart);