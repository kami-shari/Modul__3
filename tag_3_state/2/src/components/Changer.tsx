import { useState } from "react"

function Changer() {
    const [nightDay, setNightDay] = useState(true)
    
    const clickNightDay = () => {
        setNightDay(!nightDay)
    }
    return (
        // <div>
        //     <button onClick={clickNightDay} 
        //     style={nightDay ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
        //     Change it!
        //     </button>
        // </div>

<div style={{ backgroundColor: nightDay ? "white" : "black", height: "100vh", color: nightDay ? "black" : "white" }}> 
            <button onClick={clickNightDay}>
                Change It!
            </button>
        </div>


    )
}

export default Changer

