import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
