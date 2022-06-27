import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { ToastContainer } from 'react-toastify';
import { Router } from './Router'

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
