const { json } = require('body-parser');
const e = require('express');
var mongoose = require('mongoose');

const UserModel = mongoose.model("Users", new mongoose.Schema({ 
    Username: String, 
    PhoneNo: String, 
    Email: String, 
    Password:String,
    placedOrder: Boolean
}));

//---------------------------------------- U S E R-----------------------------------------------

module.exports.getUsersList = async () => {
    return await UserModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addUser = async (newUser) => {
    await (new UserModel(newUser)).save();
}

module.exports.UsernameExsits = async (entryUser) => {
    const result = await UserModel.findOne({Username: entryUser.Username});
    
    console.log("\n\n--> UsernameExists()")
    console.log(result+"\n\n\n\n")

    if(result === null ) {
        return false;
    }
    return true;
}

module.exports.EmailExsits = async (entryUser) => {
    const result = await UserModel.findOne({Email: entryUser.Email});
    
    console.log("\n\n--> EmailExists()")
    console.log(result+"\n\n\n\n")
    
    if(result === null) {
        return false;
    }
    return true;
}

module.exports.PhoneNoExsits = async (entryUser) => {
    const result = await UserModel.findOne({PhoneNo: entryUser.PhoneNo});
    
    console.log("\n\n--> PhoneNoExists()")
    console.log(result+"\n\n\n\n")
    
    if(result === null) {
        return false;
    }
    return true;
}

module.exports.UserExsits = async (entryUser) => {
    let ObjectFromDB;

    if(entryUser){
        ObjectFromDB = await UserModel.find({Username: entryUser.Username});
    }

    if(ObjectFromDB===null) {
        return null;
    }

    if(ObjectFromDB[0].Password === entryUser.Password) {
        return ObjectFromDB[0];
    }

    return null;
}

module.exports.loginUser = async(entryUser) => {
    return await this.UserExsits(entryUser);
}

module.exports.singupUser = async(entryUser) => {
    let REPLY = {
        isERROR: false,
        ERROR: null,
        isSignedUpSuccessfully: false
    }
    
    let result1 = await this.UsernameExsits(entryUser);

    if(result1 === false) {
        let result2 = await this.EmailExsits(entryUser);

        if(result2 === false) {
            let result3 = await this.PhoneNoExsits(entryUser);

            if(result3 === false) {
                let result4 = await this.addUser(entryUser);

                REPLY.isSignedUpSuccessfully = true;
            }else{
                REPLY.isERROR = true;
                REPLY.ERROR = "PHONE NO. ALREADY EXISTS";
            }
        }else{
            REPLY.isERROR = true;
            REPLY.ERROR = "EMAIL ALREADY EXISTS";
        }
    }else{
        REPLY.isERROR = true;
        REPLY.ERROR = "USERNAME ALREADY EXISTS";
    }

    return REPLY;
}

module.exports.deleteUser = async (username) => {
    await UserModel.deleteOne( { Username : username} );
}

module.exports.changePlaceOrder = async(username) => {
    await UserModel.updateOne({Username: username}, {$set: {placedOrder: true}});
}

module.exports.changePlaceOrder2 = async(username) => {
    await UserModel.updateOne({Username: username}, {$set: {placedOrder: false}});
}