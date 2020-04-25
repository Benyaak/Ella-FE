import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoogleAnalytics from '../tracking/GoogleAnalytics';

// Hooks
import { useScrollTop } from '../hooks';

// Components
import { Unauthorised } from '../pages/401/401';
import { InternalError } from '../pages/500/500';
import { NotFound } from '../pages/404/404';
import { Home } from '../pages/home/Home';

// Styles
import { GlobalStyles } from '../styles/Global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CookiesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <GoogleAnalytics>
          <useScrollTop />
          <Switch>
            <Route path="/500" component={InternalError} />
            <Route path="/404" component={NotFound} />
            <Route path="/401" component={Unauthorised} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </GoogleAnalytics>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
