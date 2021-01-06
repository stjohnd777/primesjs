const express = require('express'),
    sequalize = require('sequelize')


const app = express();

const conn = new sequalize('db','user','pass',{
    localhost : 'localhost',
    dialect : 'sqlite',
    storage :'db.sqlite',
    operatorsAliases : 'false'
})

const User = conn.define('User',{
    username : sequalize.STRING,
    bio : sequalize.TEXT
})

conn.sync({
    logging : console.log
}).then(
    ()=>{
        console.log('sqlite connected')
    }
).catch(err=>{
    console.log(err)
})

User.create({
    username : 'Daniel',bio : "Super Programmer"
}).then(
    ()=>{
        console.log('inserted')
    }
)

app.listen(8001,()=>{
    console.log('running 8001');
})