import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { Home } from './component/home';
import Context, {Context2} from './context';
import Reducer from './reducer(ex)';

// ถ้าอยากให้มี state ใช้ useState
function App() {
  const [state, setState] = useState([{content: "Hi, guys"}])
  return (
    <Context2.Provider value={{state, setState}}>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/re"><Reducer/></Route>
      </Switch>

      {/* <Home/> */}
    </Context2.Provider>
  );

  // return(
  //   <Context.Provider value="Hello world">
  //     <Home/>
  //   </Context.Provider>
  // )
  
}

export default App;
