import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store'
import Route from './routes';

import GlobalStyled from './styles/globla';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Route />
        <GlobalStyled />
      </Fragment>
    </Provider>
  );
}

export default App;
