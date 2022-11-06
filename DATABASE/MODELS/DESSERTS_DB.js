var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const Desserts = mongoose.model("Desserts", SameSchema);

// -------------- Desserts --------------

module.exports.getDessertsList = async () => {
    return await Desserts.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteDessertsItem = async (delID) => {
    await Desserts.deleteOne( { _id : delID} );
}

module.exports.addDessertsItem = async (newDish) => {
    await (new Desserts(newDish)).save();
}






