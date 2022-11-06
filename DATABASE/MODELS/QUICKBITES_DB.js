var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const QuickBites = mongoose.model("QuickBites", SameSchema);

// -------------- QuickBites --------------

module.exports.getQuickBitesList = async () => {
    return await QuickBites.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteQuickBitesItem = async (delID) => {
    await QuickBites.deleteOne( { _id : delID} );
}

module.exports.addQuickBitesItem = async (newDish) => {
    await (new QuickBites(newDish)).save();
}