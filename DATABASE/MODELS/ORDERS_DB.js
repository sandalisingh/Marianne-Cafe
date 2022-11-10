var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({
    OrderID: String,
    CustomerName: String,
    PhoneNo: String,
    Date: Date,
    List: Array,
    TotalAmt: Number,
    hasMessage: Boolean,
    Message: String
});
const Orders = mongoose.model("Orders", SameSchema);

// -------------- Desserts --------------

module.exports.getOrdersList = async () => {
    return await Orders.find({}, (err, data) => json.toString(data)).clone().catch(function (err) { console.log(err) });
}

module.exports.deleteOrdersItem = async (delID) => {
    await Orders.deleteOne({ _id: delID });
}

module.exports.addOrdersItem = async (newDish) => {
    await (new Orders(newDish)).save();
}

module.exports.getOrdersItemByUsername = async (username) => {
    return await Orders.findOne({CustomerName: username});
}

module.exports.addAMessage = async(DATA) => {
    await Orders.updateOne({OrderID: DATA}, 
        {$set: {
            hasMessage: true
        }});
}