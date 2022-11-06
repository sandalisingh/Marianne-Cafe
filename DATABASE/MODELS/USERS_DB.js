const { json } = require('body-parser');
const e = require('express');
var mongoose = require('mongoose');

const UserModel = mongoose.model("Users", new mongoose.Schema({ Username: String, PhoneNo: String, Email: String, Password:String}));

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

    if(result === true ) {
        return true;
    }
    return false;
}

module.exports.EmailExsits = async (entryUser) => {
    const result = await UserModel.findOne({Email: entryUser.Email});
    
    console.log("\n\n--> EmailExists()")
    console.log(result+"\n\n\n\n")
    
    if(result === true) {
        return true;
    }
    return false;
}

module.exports.UserExsits = async (entryUser) => {
    let ObjectFromDB;

    console.log('\nENTRY USER = ');
    console.log(entryUser)

    if(entryUser){
        ObjectFromDB = await UserModel.find({Username: entryUser.Username});
    }

    console.log("\n--> UserExists()");
    console.log(ObjectFromDB);
    console.log("\n--> ~ UserExists()");

    if(ObjectFromDB===null) {
        return false;
    }

    // console.log('\nfrom DB --> '+ObjectFromDB[0].Password)
    // console.log('\nfrom DB --> '+ObjectFromDB[0].Username)
    // console.log('\nfrom user --> '+entryUser.Password)
    // console.log('\nequality --> '+ObjectFromDB[0].Password === entryUser.Password)

    if(ObjectFromDB[0].Password === entryUser.Password) {
        console.log('----- password matches = ')
        
        return true;
    }

    console.log('----- password NOT matches')

    return false;
}

module.exports.loginUser = async(entryUser) => {
    return await this.UserExsits(entryUser);
}

module.exports.singupUser = async(entryUser) => {
    let result1 = await this.UsernameExsits(entryUser);
    let result2 = await this.EmailExsits(entryUser);

    console.log('\n\nRESULT1 = ');
    console.log(result1);
    console.log('\n\nRESULT2 = ');
    console.log(result2);

    if( result1 === false || result2 === false) {
        let result3 = await this.addUser(entryUser);

        console.log('\n\nRESULT3 = ');
        console.log(result3);

        return true;
    }
    
    return false;
}
