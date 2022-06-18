import React, {useReducer, useState} from "react"; 

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            // return state + 1;
            return {...state, count: state.count +1};
        case "decrement":
            // return state - 1;
            return {...state, count: state.count - 1};
        case "reset":
            // return 0;
            return {...state, count: 0};
        case "addText": 
             return {...state, text: [...state.text, action.text1]}; // state === {count: 0, text: ["Hello"]}
        default:
            return state;
    }
}
const Reducer = () => {
    // const [state, dispatch] = useReducer(reducer, 0)
    const [state, dispatch] = useReducer(reducer, { count: 0, text: [] })
    const [text1, setText] = useState("")
    return (
        <div style={{textAlign: "center"}}>
            {state.count}
            <div>
                <button onClick={() => dispatch({type: "increment"})}>plus</button>
                <button onClick={() => dispatch({type: "decrement"})}>minus</button>
                <button onClick={() => dispatch({type: "reset"})}>reset</button>
            </div>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch({type: "addText", text1: text1})
                    setText('')
                }}>
                <input type="text" value={text1} onChange={e => setText(e.target.value)}/>
                </form>
                <ul>
                    {state.text.map( t => <li>{t}</li> )}
                </ul>
            </div>
        </div>
    )
}

export default Reducer;