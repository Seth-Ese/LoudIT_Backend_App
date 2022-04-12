const mongoose = require('mongoose')

const dbconnect = ()=>{
    const Db_url = process.env.DATABASE_URL;
    mongoose.connect(Db_url, {useNewUrlParser: true, useUnifiedTopology: true,family:4});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(){
        //we are connected
        console.log(`My Database is connected to ${db.name}`)
    })
    
}
module.exports = dbconnect;