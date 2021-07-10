import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import JobProvider from './providers/JobProvider';
import TrackerProvider from './providers/TrackerProvider';
import ReflectionProvider from './providers/ReflectionProvider';
import "semantic-ui-css/semantic.min.css";

initMiddleware()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <JobProvider>
        <TrackerProvider>
          <ReflectionProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ReflectionProvider>
        </TrackerProvider>  
      </JobProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);