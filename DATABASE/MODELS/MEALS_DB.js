var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ Name: String, Price: Number, Image: String});
const Meals = mongoose.model("Meals", SameSchema);

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