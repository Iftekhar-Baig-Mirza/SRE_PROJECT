import React from 'react';
import './Paraone.css';
import pic from "./Pictures/site9.png";
function Paraone(props) {
    return (
        <div>
             <div className='para1'>
                <h1 className='parah1-1'>SM<span className='paras'>A</span>RT</h1>
                <h1 className='parah1'>Real   <span className="paras">Estate</span></h1>
                <p className='parap'>The smartest way to find <span className='paras'>your dream site</span></p>
            </div>
            <img className="paraimg1" src={pic}></img>
        </div>
    );
}

export default Paraone;