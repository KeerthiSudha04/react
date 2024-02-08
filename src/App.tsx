// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import MyComponentWithLoadingIndicator from './components/MyComponent';

import Auth from './Auth';
import Home from './components/Home';
// import Login from './Login';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Auth />
        <div><MyComponentWithLoadingIndicator /></div>
        {/* <Login /> */}
        {/* <Home/> */}
      </div>
    </Provider>
  );
};

export default App;
