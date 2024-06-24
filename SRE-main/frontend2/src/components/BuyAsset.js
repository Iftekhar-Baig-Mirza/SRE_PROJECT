import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagenation from "../utils/pagination";
export default function BuyAsset(){
    const [totalPages,setTotalPages] = useState(null);
    const [totalItems,setTotalItems] = useState(null);
    let [currentPage,setCurrentPage] = useState(0);
    let totalItemsPerPage=3;
    const [data,setData] = useState([]);
    function search(page){
        axios.get(`http://127.0.0.1:5000/get_sites?page=${page}&size=${totalItemsPerPage}`).then(res=>{
            // console.log(res.data)
            let response = res.data

            response = JSON.stringify(response);
            response = response.replaceAll(NaN,0);
            response = JSON.parse(JSON.parse(response));
            // console.log(typeof(JSON.parse(response)))
            // console.log(typeof(response));
            setData(response.data);
            console.log(res);
            setTotalItems(response.totalItems);
            setTotalPages(response.totalPages);
            setCurrentPage(response.currentPage);
        }).catch((e)=>{console.log(e)})
    }
    useEffect(()=>{
        search(1);
    },[]);
    function box(ele,key){
        return (<div className="single-box" key={key} style={{width:'40%'}}>
            <div> area_type : {ele.area_type}</div>
            <div> availability : {ele.availability}</div>
            <div> balcony : {ele.balcony}</div>
            <div> bath : {ele.bath}</div>
            <div> location : {ele.location}</div>
            <div> price : {ele.price}</div>
            <div> size : {ele.size}</div>
            <div> society : {ele.society}</div>
            <div> total_sqft : {ele.total_sqft}</div>
        </div>)
    }
    return(
    <section>
        <div className="assests-continer" style={{display:'flex'}}>
            {
                data.map((ele,key)=>{
                    return box(ele,key)
                })
            }
        </div>
        <Pagenation state={{totalItems:totalItems,currentPage:currentPage,totalPages:totalPages,setCurrentPage:setCurrentPage,callBack:search}}/>
    </section>)
}