const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const massive=require('massive');
const controller=require('./controller')
require('dotenv').config();
const app=express();


app.use( bodyParser.json());
app.use( cors());
massive( process.env.CONNECTION_STRING ).then(dbInstance=>{
    app.set('db', dbInstance);
});

app.get('/api/inventory',controller.getAll)
app.post('/api/product', controller.create)








const port=process.env.PORT || 3005;
app.listen(port, ()=>(console.log(`Listening on port:${port}.`)))