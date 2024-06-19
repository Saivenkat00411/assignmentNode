require('dotenv').config()
const express=require('express');
const app=express();
const connectDB = require('./db/connectDB');
const router=require('./routes/router')

app.use(express.json())


app.use('/api/v1',router);

const port = process.env.PORT || 8000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
};
start();