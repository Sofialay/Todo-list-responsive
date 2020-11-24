import React from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage'
import FirstPage from './components/FirstPage/FirstPage'
import {
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {

  return (
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <div>
            <Route exact path="/mainpage" component={MainPage} />
          </div>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
