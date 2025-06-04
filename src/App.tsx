import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from './store/store';
import Routes from './routes';
import { ErrorBoundary } from '@/hoc/ErrorBoundary.tsx';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <Router basename={'/'}>
          <Routes />
        </Router>
          </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
