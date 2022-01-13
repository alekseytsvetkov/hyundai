import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from '_app/navigators';
import {store} from '_app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
