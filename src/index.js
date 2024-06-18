import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import LandingPage from './landingPage/landingPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import {ChakraProvider} from '@chakra-ui/react';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider>
        <Header />
        <LandingPage />
        <Footer />
    </ChakraProvider>
  </StrictMode>
);
