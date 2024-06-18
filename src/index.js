import React, { StrictMode } from 'react';
import theme from './theme.js';
import * as ReactDOM from 'react-dom/client';
import LandingPage from './landingPage/landingPage.jsx';
import Header from './layout/header.jsx';
import {ChakraProvider} from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <Header />
        <LandingPage />
    </ChakraProvider>
  </StrictMode>
);  