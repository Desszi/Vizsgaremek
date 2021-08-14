const order = require('../../models/order.model');
const User = require('../../models/user.model');

exports.create = orderData => {
    const order = new Order(orderData);
    return order.save()
        .then( () => User.findById(orderData.author) )
        .then( author => {
            author.orders.push(order._id);
            return author.save();
        })
        .then( () => order );
}

exports.findOne = id => order.findById(id).populate('author');
