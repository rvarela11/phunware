const graphql = require('graphql');

const {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema
} = graphql;

const { QuestionsType, questionsResolver } = require('./questions');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Questions: {
            resolve: questionsResolver,
            args: {
                pastQuestions: { type: new GraphQLList(GraphQLInt) }
            },
            type: new GraphQLList(QuestionsType)
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
