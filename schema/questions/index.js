const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const QuestionsType = new GraphQLObjectType({
    name: 'Questions',
    fields: {
        id: { type: GraphQLInt },
        question: { type: GraphQLString },
        options: { type: new GraphQLList(GraphQLString) },
        answer: { type: GraphQLString }
    }
});

const ax = axios.create({
    baseURL: 'http://localhost:3000'
});

const questionsResolver = () => ax.get('questions.json')
    .then((response) => {
        // Getting the max number of questions
        // Creating a random number based on that max number
        const dataLength = response.data.length;
        const randomNumber = Math.floor(Math.random() * dataLength + 1);
        // Filter to get 1 random question from question.json
        const question = response.data.filter(({ id }) => id === randomNumber);
        return question;
    })
    .catch(error => console.log('Error', error));

module.exports = {
    QuestionsType,
    questionsResolver
};
