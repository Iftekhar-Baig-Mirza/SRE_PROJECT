import React, { useState } from "react";
import './Page2.css';
import { useEffect } from "react";
import axios from "axios";
function Page2(){
    const [location,setLocation]=useState([])
    const [area,setArea]=useState([])
    const [availability,setAvailability]=useState([])
    const [sqft,setSqft]=useState(null)
    const [bhk,setBhk]=useState(null)
    const [bathRooms,setBathRooms]=useState(null)
    const [predict,setPredict]=useState(0)
    const [loc,setLoc]=useState("")
    const [area2,setArea2]=useState("")
    const [availability2,setAvailability2]=useState("")
    const [toggle,setToggle]=useState(false)
    var bodyFormData = new FormData();
function handleSubmit(){
    if (sqft!=null && bhk!=null &&bathRooms!=null){

    console.log(sqft)
    bodyFormData.append('sqft', sqft);
    bodyFormData.append('bhk', bhk);
    bodyFormData.append('bath', bathRooms);
    bodyFormData.append('loc', loc);
    bodyFormData.append('area', area2);
    bodyFormData.append('avail', availability2);
axios.post("http://127.0.0.1:5000/get_predicted_price",bodyFormData).then((response)=>{
    console.log(response.data.prediction);
    setPredict([response.data.prediction])
    setToggle(!toggle);
})  

}}
function handleClear(){
    setToggle(false);
    setSqft(null)
    setBathRooms(null);
    setBhk(null);
    console.log(sqft,bathRooms,bhk)
}
useEffect(() => {
    console.log(sqft);
  }, [sqft])
useEffect(()=>{
    axios.get("http://127.0.0.1:5000/get_location_names").then((response)=>{
        console.log(response)
        setLocation([...response.data.locations])
    })
    axios.get("http://127.0.0.1:5000/get_area_names").then((response)=>{
        console.log(response)
        setArea([...response.data.area])
    })
    axios.get("http://127.0.0.1:5000/get_availability_names").then((response)=>{
        console.log(response)
        setAvailability([...response.data.availability])

    })
    
},[])
function handleChange(name,key){
    console.log(key)
    switch(name){
        case "location":
            setLoc(key)
            break
        case "area":
            setArea2(key)
            break
        case "availability":
            setAvailability2(key);
            break
        case "sqft":
            setSqft(key);
            break
        case "bhk":
            setBhk(key);
            break
        case "bathRooms":
            setBathRooms(key);
            break
    }
}
    return(
        <div className="main">
            <h1>heelooo worls</h1>
            <h1>heelooo worls</h1> 
            
            <div className="horizontal">
                <div className="vertical">
                    <div className="container2">
                        <h4>Location</h4>           
                        <select  onChange={(e)=>handleChange("location",e.target.value)} className="inpbox">
                        {location.map((op)=><option>{op}</option>)}
                        </select>
                    </div>
                    <div className="container2"> 
                        <h4>Area Type</h4>
                        <select  onChange={(e)=>handleChange("area",e.target.value)} className="inpbox">
                        {area.map((op)=><option>{op}</option>)}
                        </select>
                    </div>
                </div>
                <div className="vertical">
                    <div className="container2">
                        <h4>Availability</h4> 
                        <select  onChange={(e)=>handleChange("availability",e.target.value)} className="inpbox">
                        {availability.map((op)=><option>{op}</option>)}
                        </select>
                    </div>
                    <div className="container2">
                    <h4>Area in SqFt</h4>  
                        <form>
                        <input  onChange={(e)=>handleChange("sqft",e.target.value)} placeholder="SqFt" className="inpbox" id="sqft" required={true}/>
                        </form>
                    </div>
                </div>
                <div className="vertical">
                    <div className="container2"> 
                        <h4>BHK number</h4>
                        <form>
                        <input  onChange={(e)=>handleChange("bhk",e.target.value)} placeholder="BHK" className="inpbox" id="bhk" required/>
                        </form>
                    </div>
                    <div className="container2">  
                        <h4>Bath Rooms number</h4> 
                        <form> 
                        <input  onChange={(e)=>handleChange("bathRooms",e.target.value)} placeholder="Bath Rooms" id="bathrooms" className="inpbox" required/>
                        </form>
                    </div>
                </div>
                <div className="vertical2">
                    <div className='btndiv-2'><button className='btn3-2' onClick={(e)=>handleSubmit()}>Estimate Price</button></div>                </div>
                <div className="vertical2">
                {toggle && <h3>The House price is Rs.{predict} Lakhs</h3>}
                </div>
            </div>
            
        </div>
    );
}

export default Page2;