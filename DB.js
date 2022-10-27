var mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true});
const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const Beverages = mongoose.model("Beverages", SameSchema);
const QuickBites = mongoose.model("QuickBites", SameSchema);
const Meals = mongoose.model("Meals", SameSchema);
const Milkshakes = mongoose.model("Milkshakes", SameSchema);
const Desserts = mongoose.model("Desserts", SameSchema);

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

// -------------- Meals --------------

module.exports.getMealsList = async () => {
    return await Meals.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteMealsItem = async (delID) => {
    await Meals.deleteOne( { _id : delID} );
}

module.exports.addMealsItem = async (newDish) => {
    await (new Meals(newDish)).save();
}

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






