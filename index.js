//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DB');
var cors = require('cors');

var app = module.exports = express();

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

app.get("/Beverages", (req, res) => DB.getBeveragesList().then( (result) => res.json(result)) );

app.get('/Beverages/deletion', (req, res) => DB.deleteBeveragesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Beverages", (req, res) => DB.addBeveragesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- QuickBites --------------

app.get("/QuickBites", (req, res) => DB.getQuickBitesList().then( (result) => res.json(result)) );

app.get('/QuickBites/deletion', (req, res) => DB.deleteQuickBitesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/QuickBites", (req, res) => DB.addQuickBitesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Meals --------------

app.get("/Meals", (req, res) => DB.getMealsList().then( (result) => res.json(result)) );

app.get('/Meals/deletion', (req, res) => DB.deleteMealsItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Meals", (req, res) => DB.addMealsItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Milkshakes --------------

app.get("/Milkshakes", (req, res) => DB.getMilkshakesList().then( (result) => res.json(result)) );

app.get('/Milkshakes/deletion', (req, res) => DB.deleteMilkshakesItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Milkshakes", (req, res) => DB.addMilkshakesItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

// -------------- Desserts --------------

app.get("/Desserts", (req, res) => DB.getDessertsList().then( (result) => res.json(result)) );

app.get('/Desserts/deletion', (req, res) => DB.deleteDessertsItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/Desserts", (req, res) => DB.addDessertsItem( { Name: req.body.Name , Price: req.body.Price, Image: req.body.Image } ).then( () => res.redirect('/')) );

//----------------------- ----------------------- -----------------------

app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });
