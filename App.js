const mongoose = require('mongoose')
const express = require ('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

//This function is to connect our express with database
mongoose.connect('mongodb://127.0.0.1:27017/Empdatabase')
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log(err);
})

//This function is to handle all json data
app.use(express.json())
app.use(bodyParser.json());

app.use(cors())

//This is just to check whether our server is running
app.get('/', (req, res) => {
    res.send("WELCOME to Home page")
})

app.use(express.static('public/images'))

//main route
const LoginRoute=require('./Route/Login_route')
app.use('/Login',LoginRoute)

const personRoute=require('./Route/Create_route')
app.use('/Person',personRoute)

const employeeRoute = require('./Route/EmployeeRouter')
app.use('/employee',employeeRoute);

// const RecoveryRoute=require('./Route/Recovery_route')
// app.use('/Recovery',RecoveryRoute)


//This function is to create a server on the specified port
app.listen(8080, () => {
    console.log("Server running");
})
