import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Routes from './routes';
import {ErrorBoundary} from '@/hoc/ErrorBoundary.tsx';


function App() {

  return (
      <ErrorBoundary>
        <Provider store={store}>
      <Router basename={'/'}>
    <Routes/>
      </Router>
        </Provider>
      </ErrorBoundary>
  )
}

export default App
