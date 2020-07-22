import React from 'react';
import './App.css';
import CovidMainContainer from './components/covid/CovidMainContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="main">
          <div className="wrapper">
            <CovidMainContainer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
