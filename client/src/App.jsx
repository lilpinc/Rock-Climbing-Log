// Bringing in the required import from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import Footer from './components/Footer/Footer';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
      </ApolloProvider>
  );
}

export default App;