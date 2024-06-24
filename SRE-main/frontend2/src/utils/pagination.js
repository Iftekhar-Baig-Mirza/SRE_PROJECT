import React, { useState } from 'react'

export default function Pagenation(props) {
    // const []
    let {totalItems,currentPage,totalPages} = props.state;
  return (
    <div className="Pagenation-navigator" style={{margin:"5px"}}>
    <span style={{color:'black'}}>Total Items - {totalItems}</span>&nbsp;
    
    <span style={{cursor:'pointer',color:(currentPage<=1)?"black":'blue'}} onClick={()=>{(currentPage>1 && props.state.callBack(currentPage-1))}}>Prev</span>
    {
        Array.from({length:totalPages},(val,key)=>{
            return <span style={{cursor:'pointer',color:(key+1==currentPage)?'black':"blue"}} onClick={()=>{
                
                (key+1!=currentPage) && props.state.callBack(key+1)
            }}>&nbsp;{key+1}&nbsp;</span>
        })
    }
    <span style={{cursor:'pointer',color:(totalPages>currentPage)?"blue":'black'}} onClick={()=>{(totalPages>currentPage && props.state.callBack(currentPage+1))}}>Next</span>
 </div>
  )
}
