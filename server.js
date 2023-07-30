const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 8000;
const MONGO_URL= 'mongodb://127.0.0.1:27017/boiler';
const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready!')
})

async function startServer(){
   await mongoose.connect(MONGO_URL,{
       useNewUrlParser:true,
       useUnifiedTopology:true
   });
    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}...`)
    })
}

startServer()



