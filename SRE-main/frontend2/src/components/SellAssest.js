import React, { useState } from "react";
import './sellAssests.css'
import axios from "axios";
export default function SellAssest(){
    const [area_type,setarea_type]=useState("");
    const [availabilit,setavailability] = useState("");
    const [location,setlocation] = useState("")
    const [size ,setsize] = useState(0);
    const [society,setsociety] = useState("");
    const [total_sqft,settotal_sqft] = useState(0);
    const [bath,setbath] = useState(0);
    const [balcony,setbalcony] = useState(0);
    const [price,setprice] =useState(0)
    function submit(){
        let bodyFormData = new FormData();
        bodyFormData.append("area_type",area_type);
        bodyFormData.append("availability",availabilit)
        bodyFormData.append("location",location)
        bodyFormData.append("size",size)
        bodyFormData.append("total_sqft",total_sqft)
        bodyFormData.append("society",society)
        bodyFormData.append("bath",bath)
        bodyFormData.append("balcony",balcony)
        bodyFormData.append("price",price);
        axios.post("http://127.0.0.1:5000/add_site",bodyFormData).then((response)=>{
            alert("process completed")
        }).catch((e)=>alert("something went wrong"))
    }
    return (
        <section className="sell-form" >
            <div className="form">
                <div>
                    <label htmlFor='area_type'>Area type</label>
                    <input id="area_type" onChange={(e)=>setarea_type(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='availabilit'>availabilit</label>
                    <input id="availabilit" onChange={(e)=>setavailability(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='location'>location type</label>
                    <input id="location" onChange={(e)=>setlocation(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='size'>size</label>
                    <input id="size" onChange={(e)=>setsize(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='society'>society</label>
                    <input id="society" onCanPlay={(e)=>setsociety(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='total_sqft'>totalnsqft</label>
                    <input id="total_sqft" type="number" onChange={(e)=>settotal_sqft(e.target.value)}/>
                </div>
                <div>
                    <label htmlhtmlFor='bath'>bath</label>
                    <input id="bath" type="number" onChange={(e)=> setbath(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='balcony'>balcony</label>
                    <input id="balcony"  type="number" onChange={(e)=>setbalcony(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='price'>price</label>
                    <input id="price" type="number" onChange={(e)=>setprice(e.target.value)}/>
                </div>
            </div>
            <button onClick={submit}>Sell</button>
        </section>
    )
}