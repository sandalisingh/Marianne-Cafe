const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true});
const UserLoginModel = mongoose.model("User", new mongoose.Schema({ Username: String, PhoneNo: String, Email: String, Password:String}));

const addUser = async (newUser) => {
    await (new UserLoginModel(newUser)).save();
}

const createUser = async (entryUser) => {
    const var1 = await UserLoginModel.findOne({Userame: entryUser.Userame});
    const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
    const var3 = await UserLoginModel.findOne({PhoneNo: entryUser.PhoneNo});
    if(var1 === true || var2 === true || var3 === true) {
        return true;
    }
    addUser(entryUser);
    return false;
}

// createUser({Username: "Sandali", PhoneNo: "",Email:"sandali@gmail.com", Password:"Singh"});
