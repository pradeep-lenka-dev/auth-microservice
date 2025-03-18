require ("dotenv").config();
const express = require ('express');
const cors =require ('cors');
const morgan = require('morgan');
const conectDB = require('./config/db')
const router = require ('./userRoutes')


const app = express();

//Middlewar
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api',router)
app.get("/", (req, res) => {
    res.json({ message: "We have mounted the voulme to running container" });
  });
conectDB()
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server start on ${PORT}`))
