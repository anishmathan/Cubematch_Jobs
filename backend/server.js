const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../backend/db");
const path = require("path");
const jobsRoute = require('../backend/routes/jobsRoute')
const userRoute = require('../backend/routes/usersRoute')
app.use(cors());
app.use(express.json())
app.use(express.json({ limit: "50mb" }));
const http = require("http");


app.use('/api/jobs/' , jobsRoute)

app.use('/api/users/' , userRoute)
const port = process.env.PORT || 5000;

 if(process.env.NODE_ENV === 'production')
 {
     app.use('/' , express.static('frontend/build'))

     app.get("*", (req, res) => {

          res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
       
     });
 }


app.listen(port, () => console.log('Node JS Server Started'));