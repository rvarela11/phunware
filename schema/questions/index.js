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

const questionsResolver = (parentValue, args) => ax.get('questions.json')
    .then((response) => {
        const { data } = response;
        const { pastQuestions } = args;
        // Creating a random number based on that max number
        const getRandomNumber = () => Math.ceil(Math.random() * (data.length));
        let randomNumber = getRandomNumber();

        // If randomNumber is found in the pastQuestions array set another number to randomNumber
        // To not show duplicate questions in our 10 question quiz
        while (pastQuestions.indexOf(randomNumber) !== -1) {
            randomNumber = getRandomNumber();
        }
        // Filter to get 1 random question from question.json
        const question = data.filter(({ id }) => id === randomNumber);
        return question;
    })
    .catch(error => console.log('Error', error));

module.exports = {
    QuestionsType,
    questionsResolver
};
