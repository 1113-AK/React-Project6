import React, { Component } from "react";
import Iphone14 from "./Images/Iphone14.jpeg";
import Arp from "./Images/Asus Rog Phone.jpeg";
import op from "./Images/oneplus.jpeg";
import './about.css'
import R from "./Images/RadoHR.webp";
import video1 from './Vid/V2.mp4';
class Phone extends Component{
    render(){
        return(
            <div>
                <img src={op} className="p1" alt="oneplus" width={300} height={300}/>
                <img src={R} className="p2" alt="Rado HR" width={300} height={300}/>
                <p style={{fontFamily:"sans-serif", fontSize:"48px"}}>
                Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.
                </p>
                <h2 style={{textAlign:"center", fontFamily:"cursive"}}><a href="http://localhost:3000/joinus">Join Us</a></h2>
                
            </div>
            
            
        );
    }
}

export default Phone;