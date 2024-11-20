import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    
    const [counter, setCounter] = useState(initialValue)

    const increment = (val = 1) =>{
        setCounter(counter + val)
    }
    const reset = (val = 1) =>{
        setCounter(initialValue)
    }
    const decrement = (val = 1, allowNegative = true) =>{
        if (!allowNegative && counter < 1) return 
        setCounter(counter - val)
    }

        
    return {
        counter,
        increment,
        reset,
        decrement
    }
}