const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('*', cors({
    credentials: true
}));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
