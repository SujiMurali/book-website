if(process.env.NODE_ENV !=="production"){
    require('dotenv').config();
}

const express = require('express'),
   app = express(),
   bodyparser = require('body-parser'),
   mongoose = require('mongoose'); 

app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:false}))
const dburl=process.env.DB_URL;

//1APo2xxHNAYyrdfX
// 'mongodb://localhost:27017/logindb'
mongoose.connect('mongodb+srv://mini-project:1APo2xxHNAYyrdfX@cluster0.spwts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/logindb',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})


const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", () =>{
    console.log("Database connected");
})
app.get('/',(req,res)=>{
   res.sendFile(__dirname + "/views/")
})
app.get('/book', function (req, res) {
    res.sendFile(__dirname +"/views/book.html")
  })
app.get('/infinity', function (req, res) {
    res.sendFile(__dirname +"/views/infi.html")
  })
  app.get('/lemontree', function (req, res) {
    res.sendFile(__dirname +"/views/lemon.html")
  })
  app.get('/vardhman', function (req, res) {
    res.sendFile(__dirname +"/views/vardhman.html")
  })
  app.get('/grammer', function (req, res) {
    res.sendFile(__dirname +"/views/graminfi.html")
  })
  app.get('/computer', function (req, res) {
    res.sendFile(__dirname +"/views/cominfi.html")
  })
  app.get('/cursive', function (req, res) {
    res.sendFile(__dirname +"/views/writinginfi.html")
  })
  app.get('/generalknowledge', function (req, res) {
    res.sendFile(__dirname +"/views/gkinfi.html")
  })
  app.get('/englishreader', function (req, res) {
    res.sendFile(__dirname +"/views/englishreaderinfi.html")
  })

  app.get('/grammerplay', function (req, res) {
    res.sendFile(__dirname +"/views/gramlemon.html")
  })
  app.get('/preprimary', function (req, res) {
    res.sendFile(__dirname +"/views/preprimarylemon.html")
  })
  app.get('/Knowledgebox', function (req, res) {
    res.sendFile(__dirname +"/views/knowledgeboxlemon.html")
  })
  app.get('/moralscience', function (req, res) {
    res.sendFile(__dirname +"/views/morallemon.html")
  })

  app.get('/maths', function (req, res) {
    res.sendFile(__dirname +"/views/maths.html")
  })
  app.get('/science', function (req, res) {
    res.sendFile(__dirname +"/views/science.html")
  })
  app.get('/leightofknowledge', function (req, res) {
    res.sendFile(__dirname +"/views/leightofknow.html")
  })
  
  app.get('/vpublication', function (req, res) {
    res.sendFile(__dirname +"/views/vpub.html")
  })
  app.get('/tamilwriting', function (req, res) {
    res.sendFile(__dirname +"/views/vtamilwriting.html")
  })
  app.get('/tamililakkanam', function (req, res) {
    res.sendFile(__dirname +"/views/tamililakkanam.html")
  })
  app.get('/artandcraft', function (req, res) {
    res.sendFile(__dirname +"/views/artandcraft.html")
  })

  app.get('/goodluck', function (req, res) {
    res.sendFile(__dirname +"/views/goodluck.html")
  })
  app.get('/basicgrammar', function (req, res) {
    res.sendFile(__dirname +"/views/basicgrammar.html")
  })
  app.get('/mathsgoodluck', function (req, res) {
    res.sendFile(__dirname +"/views/mathsgoodluck.html")
  })
  app.get('/artdrawing', function (req, res) {
    res.sendFile(__dirname +"/views/artdrawing.html")
  })

  app.get('/ourpublishers', function (req, res) {
    res.sendFile(__dirname +"/views/ourpublishers.html")
  })
 
app.post('/',(req,res)=>{
    var detail = new Login({
        name: req.body.name,
        pwd: req.body.pwd,
       
    })
    detail.save()
    res.redirect('/')
    console.log(detail)
})
app.post('/sign',(req,res)=>{
    var signdetail = new Sign({
        
        name1: req.body.name1,
        email: req.body.email,
        pwd1: req.body.pwd1,
        phone: req.body.phone
    })
    signdetail.save()
    res.redirect('/')
    console.log(signdetail)
})

app.post('/contact',(req,res)=>{
    var condetail = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    condetail.save()
    res.redirect('/')
    console.log(condetail)
})

app.post('/details',(req,res)=>{
    var  userdetails = new Details({
        name1: req.body.name1,
        phone : req.body.phone
    })
    userdetails.save()
    res.redirect('/book')
    console.log(userdetails)
})

var logSchema = new mongoose.Schema({
            name : String,
            pwd  : String,
            
})

var signSchema = new mongoose.Schema({
    postedBy: logSchema,
    name1 : String,
    email : String,
    pwd1: String,
    phone : Number 
})

var conSchema = new  mongoose.Schema({
    name: String,
    postedBy: logSchema,
    email : String,
    subject: String,
    message : String
   
});

var detailsSchema = new  mongoose.Schema({
    name1: String,
    postedBy: logSchema,
    phone : String
   
});
var Login  =  mongoose.model("Login",logSchema)
var Contact  =  mongoose.model("Contact",conSchema)
var Sign  =  mongoose.model("Sign",signSchema)
var Details  =  mongoose.model("Details",detailsSchema)
           
            
    app.listen(process.env.PORT || 5000,()=>{
    console.log('App started');
})






////