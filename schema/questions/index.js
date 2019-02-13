const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const QuestionsType = new GraphQLObjectType({
    name: 'Questions',
    fields: {
        id: { type: GraphQLInt },
        question: { type: GraphQLString },
        options: { type: GraphQLString },
        answer: { type: GraphQLString }
    }
});

const ax = axios.create({
    baseURL: 'http://localhost:3000'
});

const questionsResolver = () => ax.get('questions.json')
    .then(response => response.data)
    .catch(error => console.log('Error', error));

module.exports = {
    QuestionsType,
    questionsResolver
};
