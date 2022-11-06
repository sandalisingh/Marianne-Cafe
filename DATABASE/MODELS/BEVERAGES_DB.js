var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const Beverages = mongoose.model("Beverages", SameSchema);

// -------------- Beverages --------------

module.exports.getBeveragesList = async () => {
    return await Beverages.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteBeveragesItem = async (delID) => {
    await Beverages.deleteOne( { _id : delID} );
}

module.exports.addBeveragesItem = async (newDish) => {
    await (new Beverages(newDish)).save();
}