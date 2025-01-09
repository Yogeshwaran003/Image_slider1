import { useState } from 'react'
import'./slider.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function sliderofimage(props){
    const[Number,setNumber]=useState(0);
    function preslide(){
        setNumber(N=>N-1)
        if(Number<=0){
            setNumber(props.data.slide.length-1)
        }
    }
    function nextslide(){
        setNumber(N=>N+1)
        if(Number>=props.data.slide.length-1){
            setNumber(0);
        }
    }
    return(
        <div className="outer-container">   
                <div className="inner-container1">
                    <BsArrowLeftCircleFill onClick={preslide} className=' arrow leftarrow'/>
                    {props.data.slide.map((item,index)=><img key={index} src={item.src} className={Number==index?"slider-images":"slider-images nodisplay"}/>)}
                    <BsArrowRightCircleFill onClick={nextslide} className=' arrow rigtharrow'/>
                </div>
                <div className="inner-contaniner2">
                    {props.data.slide.map((_,index)=><span key={index}><div onClick={()=>{setNumber(index)}} className={Number==index?"c-indicator indicator":"indicator"}></div></span>)}
                </div>
        </div>
    )
}