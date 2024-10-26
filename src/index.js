import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { persistor } from './redux/store';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={persistor}>
    <React.StrictMode>
      <BrowserRouter basename='finance-app'>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);