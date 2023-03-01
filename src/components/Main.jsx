import React,{useState,useRef} from "react"
import check from "../assets/check.png"
import cross from "../assets/close.png"
import bull from "../assets/bullseye.png"
import plus from "../assets/plus.png"
import bulb from "../assets/light-bulb.png"
import "../styles/Main.css"

export default function Main(){
    const inputref = useRef(null)
    const [formData, setformData] = useState({"topic":"","points":""});
    const [points, setpoints] = useState([]);
    const [topicSelected, settopicSelected] = useState(false);
    const question = points.length>0 ? "What other points will you focus?" : "What points will you focus?"
    const placeholder = points.length>0 ? "Add any other points..." : "e.g Invest your money"

    const pointsDisplay=points.slice(0).reverse().map((point,id)=>{
        return (
        <div key={id} className="points-field">
            <img className="bull" src={bull}/>
            <p className="points">{point}</p>
            <img className="cross" src={cross} onClick={()=>deletePoint((points.length-id)-1)}/>
        </div>
        )
    })
    function handleSubmit(){console.log('first') }


    function handleChange(event){const {name,value}=event.target
    setformData(prevForm => ({...prevForm,[name]:value}))
    }

    function handleTopicSelect() {
     if(formData.topic.length>0){
         settopicSelected(true)
        inputref.current.setAttribute("disabled", true)
        }
     }

    function handleTopicUnSelect(){
        settopicSelected(false)
        setformData({"topic":"","points":formData.points})
        inputref.current.removeAttribute("disabled")
    }

    function deletePoint(id){setpoints(points=> (points.filter((point,index)=>(index!==id))))}

    function addPoint(){if(formData.points.length>0){
        setformData({"topic":formData.topic,"points":""})
        setpoints(prev=>([...prev,formData.points]))
    }}
    

    const stylesTopic={
        "opacity": formData.topic.length> 0 ? 1:0.5,
        "cursor":  formData.topic.length> 0 ? "pointer":"default"
    }
    const stylesPoints={
        "opacity": formData.points.length> 0 ? 1:0.5,
        "cursor":  formData.points.length> 0 ? "pointer":"default"
    }
    //console.log('formData', formData)
    return(
        <div className="main-container">
            <form>
                <label className="question">
                    What are you gonna talk about?
                    <div className="question-container">
                    {topicSelected && <img className="bulb" src={bulb}/>}
                    <input className="input-field" ref={inputref} type="text" placeholder="e.g how to be a millionaire in 2023?" name="topic" value={formData.topic} onChange={(event)=>handleChange(event)} />
                    {topicSelected 
                    ?<img  src={cross} onClick={handleTopicUnSelect}/>
                    :<img style={stylesTopic} src={check} onClick={handleTopicSelect}/>}
                    </div>
                </label>
                <div className="space">
                <label className="question">
                   {question}
                    <div className="question-container-2">
                    <input className="input-field-2" type="text" placeholder={placeholder} name="points" value={formData.points} onChange={(event)=>handleChange(event)} />
                    <img style={stylesPoints} src={plus} onClick={addPoint}/></div>
                </label></div>
            </form>
           {points.length > 0 && <div className="points-container">
                <div className="points-heading">You are focusing on</div>
                        {pointsDisplay}
            </div>}
        </div>
    )
}