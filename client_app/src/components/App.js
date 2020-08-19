  
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from '../config/gql_config';
import Students from './Student'

function App() {
  return (
    <ApolloProvider client={client}>
      <Students/>
    </ApolloProvider>
  );
}

export default App;