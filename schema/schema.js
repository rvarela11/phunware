const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphql;

const { QuestionsType, questionsResolver } = require('./questions');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Questions: {
            resolve: questionsResolver,
            type: new GraphQLList(QuestionsType)
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
