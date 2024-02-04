import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from 'react-router-dom';
import theme from './theme'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
)
