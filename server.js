const express = require('express');
const expressGrapQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGrapQL({
    graphiql: true,
    schema: 
}));


app.listen(4100, () =>{
    console.log('App listening');
})