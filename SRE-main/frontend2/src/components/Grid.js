import React from 'react';
import "./Grid.css";
import { Link } from 'react-router-dom';
import img0 from "./Pictures/cardimage7.jpg"
import img1 from "./Pictures/cardimage8.jpg";
import img2 from "./Pictures/cardimg1.svg";
import img3 from "./Pictures/cardimg2.svg";
import img4 from "./Pictures/cardimg3.svg";
import img5 from "./Pictures/cardimg4.svg";
import img6 from "./Pictures/cardimg5.svg";
import img7 from "./Pictures/cardimg6.svg";
function Grid(props) {
    return (   
        <div>
            <div className="container">
                <div className="card1">
                    <div className='para3-2'>
                        <h1 className='para3h1'>Experience the power of machine learning in real estate using <span className="para3s">Smart Real Estate</span> with accurate and reliable price predictions.</h1>
                        <Link to='/predict' className='textdec'>
                        <div className='btndiv'><button className='btn3'>Predict</button></div>
                        </Link>
                            <img className="imgcrd1" src={img0}></img>
                            <img className="imgcrd2" src={img1}></img>
                    </div>
                </div>
                <div className="card2">
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img2}></img>
                            <h2 className="childh2">Accurate and Reliable</h2>
                            <p className="parachild">IT is trained on vast amounts of real estate data and <span className="childspan">continuously updated</span> with the latest market trends </p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img3}></img>
                            <h2 className="childh2">Easy to Use</h2>
                            <p className="parachild">User-friendly interface makes it easy for anyone to input property details and get an instant price prediction</p>
                        </div>
                    </div>
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img4}></img>
                            <h2 className="childh2">Customizable Inputs</h2>
                            <p className="parachild"> You can input various factors such as location, property type, size, amenities, and more to get a <span className="childspan">tailored price</span> prediction.</p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img5}></img>
                            <h2 className="childh2">Time-Saving</h2>
                            <p className="parachild">saves you valuable time by <span className="childspan">providing quick</span> and accurate price predictions. Instead of spending hours researching comparable properties allowing you to make faster decisions.</p>
                        </div>
                    </div>
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img6}></img>
                            <h2 className="childh2">Solution oriented</h2>
                            <p className="parachild">Whether you are a first-time homebuyer, a seasoned investor, or a real estate professional, our platform is designed to <span className="childspan">simplify the process</span> and make informed decisions.</p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img7}></img>
                            <h2 className="childh2">Manage unpredictability</h2>
                            <p className="parachild">Accurately predicts the prices based on key inputs, you can <span className="childspan">mitigate unpredictability</span> and make more informed decisions in your real estate transactions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;