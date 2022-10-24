var mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true});
const FoodList = mongoose.model("FoodList", new mongoose.Schema({ name: String, price: Number, img: Image}));

module.exports.getList = async () => {
    return await FoodList.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteItem = async (delID) => {
    await FoodList.deleteOne( { _id : delID} );
}

module.exports.addItem = async (newDish) => {
    await (new FoodList(newDish)).save();
}





