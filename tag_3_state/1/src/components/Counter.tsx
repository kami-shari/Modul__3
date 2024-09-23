import { useState } from "react"

function Counter() {
    
    const [count, setCount] = useState(0)

    const countUp =  () => {
        setCount((count) => (count + 1))
    }

    const countDown =  () => {
        setCount((count) => (count - 1))
    }

return (
    <div>
        <button onClick={countUp}>plus 1</button>
        <p>{count}</p>
        <button onClick={countDown}>minus 1</button>

    </div>
)



}



export default Counter