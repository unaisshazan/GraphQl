  
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from '../config/gql_config';


function App() {
  return (
    <ApolloProvider client={client}>
      
    </ApolloProvider>
  );
}

export default App;