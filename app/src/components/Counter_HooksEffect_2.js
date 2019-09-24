import React, {useState, useEffect } from 'react'
import {Card, Button} from 'react-rainbow-components';

function Counter_HooksEffect_2() {
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
   
    // function inside gets called after every render
    useEffect(() => {
            //setCount(count + 10);
            document.title = `YAH clicked ${count} times`;    
    }, [count]);  // [count]  will run until React stops code

    return (
        <div>
           <Button onClick = {() => setCount(count + 1)}> Been clicked {count} times</Button> 
        </div>
    )
}

export default Counter_HooksEffect_2;
