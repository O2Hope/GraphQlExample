const express = require('express');
const expressGrapQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGrapQL({
    schema,
    graphiql: true
}));


app.listen(4100, () =>{
    console.log('App listening');
})