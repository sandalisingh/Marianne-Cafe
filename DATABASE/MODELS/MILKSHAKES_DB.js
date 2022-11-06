var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const Milkshakes = mongoose.model("Milkshakes", SameSchema);

// -------------- Milkshakes --------------

module.exports.getMilkshakesList = async () => {
    return await Milkshakes.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteMilkshakesItem = async (delID) => {
    await Milkshakes.deleteOne( { _id : delID} );
}

module.exports.addMilkshakesItem = async (newDish) => {
    await (new Milkshakes(newDish)).save();
}