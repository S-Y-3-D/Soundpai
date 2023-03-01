import React,{useState} from "react"
import ahead from "../assets/fast-forward.png"



export default function Home(){
    const [hover, setHover] = useState(false);

    function handleHoverOn(){
        setHover(true)
    }

    function handleHoverOut(){
        setHover(false)
    }

    return (
        <div className="home">
            <h1 className="sell-heading">
            Speak with Clarity & Precision
            Get Real-Time Suggestions &  Feedback
            </h1>
            <img className="move-to-icon" onMouseOver={handleHoverOn} onMouseOut={handleHoverOut} src={ahead}/>
            {hover && <h5 className="cheesy-text">Leave it to senpai</h5>}
        </div>
    )
}