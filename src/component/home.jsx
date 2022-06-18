import React, { useContext } from 'react'
import Context, {Context2} from '../context';
import logo from '../logo.svg'

// เขียนโดยใช้ useContext ให้อ่านง่ายขึ้น
export const Home = () => {
    const {state, setState} = useContext(Context2)
    console.log({state})
    // const value = useContext(Context)
    return (
        // <Context2.Consumer>
        //     { ([state, setState]) => (
                <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
                <span>{state[0].content}</span>
                {/* <span>{value}</span> */}
            </p>
            <button onClick={() => {
                setState([{content: "Hi, people"}])
            }}>Change word</button>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        //     )}
        // </Context2.Consumer>
        
      );
}