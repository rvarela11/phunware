// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// @apollo
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import apolloLogger from 'apollo-link-logger';
import { ApolloProvider } from 'react-apollo';

// @state
import { defaults, resolvers } from './state';

// @components
import Root from './components/App/App';

const cache = new InMemoryCache();
const stateLink = withClientState({ resolvers, cache, defaults });

const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
                // eslint-disable-next-line no-console
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            });
        }
        // eslint-disable-next-line no-console
        if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    apolloLogger,
    stateLink,
    new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'same-origin'
    })
]);

const client = new ApolloClient({
    cache,
    link
});

// Setting the Material-UI theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#49aaca'
        },
        secondary: {
            main: '#ef9a9a'
        }
    },
    status: {
        danger: 'orange'
    },
    typography: {
        useNextVariants: true
    }
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Root />
    </MuiThemeProvider>
);

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
