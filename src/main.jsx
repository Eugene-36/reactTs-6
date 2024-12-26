import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// провайдер
import { Provider } from 'react-redux';
// створений раніше стор
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
