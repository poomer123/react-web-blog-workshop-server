const express = require('express')
const bodyParser = require('body-parser')
const ase = require('apollo-server-express')
const myGraphQLSchema = require('./schema')

// const myGraphQLSchema = 
// ... define or import your schema here!
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use(
    '/graphql',
    bodyParser.json(),
    ase.graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(PORT);