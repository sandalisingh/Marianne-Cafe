//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DATABASE/DB');
var cors = require('cors');
const e = require("express");

var app = module.exports = express();

var isLoggedIn = false;
var isAdmin = false;
var LoggedInUsername = "";


//----------------------- ----------------------- -----------------------
app.use(cors());
app.engine('.html', require('ejs').__express);      //Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. The __express method is simply a function that engines use to hook into the Express view system by default, so if we want to change "foo.ejs" to "foo.html" we simply pass _any_ function, in this case `ejs.__express`.
app.set('views', path.join(__dirname, "front", "public"))   // since express defaults to CWD/views
app.use(express.static(path.join(__dirname, 'client', 'src')));  // Path to our public directory
app.set('view engine', 'html')  // Without this you would need to supply the extension to res.render() ex: res.render('users.html').
app.use( bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json());

//----------------------- ----------------------- -----------------------

app.get("/", (req, res) => {
    // console.log("Haan bol");
    res.json("Working")
  } );  

// -------------- Beverages --------------

app.get("/Beverages", (req, res) => DB.BEVERAGES_DB.getBeveragesList().then( (result) => res.json(result)) );

app.get('/Beverages/deletion', (req, res) => DB.BEVERAGES_DB.deleteBeveragesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Beverages", (req, res) => DB.BEVERAGES_DB.addBeveragesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- QuickBites --------------

app.get("/QuickBites", (req, res) => DB.QUICKBITES_DB.getQuickBitesList().then( (result) => res.json(result)) );

app.get('/QuickBites/deletion', (req, res) => DB.QUICKBITES_DB.deleteQuickBitesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/QuickBites", (req, res) => DB.QUICKBITES_DB.addQuickBitesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Meals --------------

app.get("/Meals", (req, res) => DB.MEALS_DB.getMealsList().then( (result) => res.json(result)) );

app.get('/Meals/deletion', (req, res) => DB.MEALS_DB.MEALS_DBdeleteMealsItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Meals", (req, res) => DB.MEALS_DB.addMealsItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Milkshakes --------------

app.get("/Milkshakes", (req, res) => DB.MILKSHAKES_DB.getMilkshakesList().then( (result) => res.json(result)) );

app.get('/Milkshakes/deletion', (req, res) => DB.MILKSHAKES_DB.deleteMilkshakesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Milkshakes", (req, res) => DB.MILKSHAKES_DB.addMilkshakesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Desserts --------------

app.get("/Desserts", (req, res) => DB.DESSERTS_DB.getDessertsList().then( (result) => res.json(result)) );

app.get('/Desserts/deletion', (req, res) => DB.DESSERTS_DB.deleteDessertsItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Desserts", (req, res) => DB.DESSERTS_DB.addDessertsItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

//---------------------------------------- U S E R-----------------------------------------------

app.get("/users", (req, res) => DB.USERS_DB.getUsersList().then( (result) => res.json(result)) );

app.post('/login', async (req, res) =>  {
  let Username = req.body.Username;
  let Password = req.body.Password;
  let CREDENTIALS = {
    Username: Username, 
    Password: Password
  }

  console.log('\n\nLOGIN SERVER --- received');
  console.log(CREDENTIALS);

  await DB.USERS_DB.loginUser(CREDENTIALS)
    .then( (result) => {
      console.log(result);

      let REPLY = {
        isLoggedIn: false,
        isAdmin: false,
        User: ""
      }

      if(result == false) {
        res.send(REPLY)
      }else{
        REPLY.isLoggedIn = true;

        REPLY.isAdmin = (Username === 'admin');
        // console.log("\n\n--> isAdmin = "+isAdmin+"\n\n")

        // localStorage.setItem('TOKEN', JSON.stringify(result));

        REPLY.User = Username;
        
        res.send(REPLY)
        // res.redirect('/');
      } 
      
      // res.json(result);
      // res.send(result)
  })
  // res.send(`Username: ${username} Email: ${email} Password: ${password}`);
});

app.post('/signup', (req, res) =>  {
  let username = req.body.Username;
  let email = req.body.Email;
  let phoneno = req.body.PhoneNo;
  let password = req.body.Password;
  let message = {
    Username: username, 
    PhoneNo: phoneno, 
    Email: email, 
    Password: password
  }

  // console.log('\n\nMESSAGE = ');
  // console.log(message);

  DB.USERS_DB.singupUser(message)
    .then( (result) => {
      console.log("\n\nFROM SERVER ---- LOGIN")
      console.log(result);
      res.json(result);
      
      // if(result == false) {
      //   // res.send("TRY AGAIN LATER")
      //   // res.redirect('/signup')

      //   res.json({
      //     isError: true,
      //     isLoggedIn: false,
      //     isAdmin: false
      //   })
      // }else{
      //   isLoggedIn = true;

      //   isAdmin = (username === 'admin');
      //   // console.log("\n\n--> isAdmin = "+isAdmin+"\n\n")

      //   LoggedInUsername = username;
        
      //   // res.send("LOGGED IN isAdmin = "+isAdmin)
      //   // res.redirect('/')

      //   res.json({
      //     isError: false,
      //     isLoggedIn: isLoggedIn,
      //     isAdmin: isAdmin,
      //     LoggedInUsername: LoggedInUsername
      //   })
      // }    
  })

  // res.send(`Username: ${username} PhoneNo: ${phoneno} Email: ${email} Password: ${password}`);
});

app.get("/login", (req,res) =>{
  res.json({
    isLoggedIn: isLoggedIn,
    isAdmin: isAdmin,
    Username: LoggedInUsername
  })
});

// app.get("/logout", (req,res) =>{
//   isLoggedIn = false;
//   isAdmin = false;
//   LoggedInUsername = "";
// });

//---------------------------------------- P O R T -----------------------------------------------

app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });
