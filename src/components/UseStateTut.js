import React,{useState} from 'react'

const UseStateTut=()=>{

    const[counter,setCounter]=useState(0);
    const incr=()=>{
        setCounter(counter+1)
    };
    const decr=()=>{
        setCounter(counter-1)
    }

    const [inputValue,setInputValue]=useState("Something")
    let onChange=(event)=>{
        setInputValue(event.target.value)
    }

    return(
        <div>   
            {counter}
            <br></br>
            <button onClick={incr}>Increment</button>
            <br/>
            <button onClick={decr}>Decrease</button>
            <br/><br/>

            <input placeholder='Enter something' onChange={onChange}/>
            <br/>
            {inputValue}

        </div>
    );
}

export default UseStateTut;

/*
1.importing
import React,{useState} from 'react'
2.change the definition of the variable using definition from the useState
->const[counter,setCounter]
-first part is name of variable second part is function that will change the variable/the state of the variable
-const[counter,setCounter]=useState(); value of useState inside () is an initial value
-cant alter the value of a state with just +1,we need to use the function we defined in the state i.e setState
-refreshing means rerendering the state of the variable
-onChange automatically passes event value
*/