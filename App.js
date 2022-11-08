import React from 'react'
import Navigation from './src/navigator/Navigation'
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
   
  )
}

export default App