import React, { Component } from "react";
import Iphone14 from "./Images/Iphone14.jpeg";
import Arp from "./Images/Asus Rog Phone.jpeg";
import op from "./Images/oneplus.jpeg";
import './about.css'
import video1 from './Vid/V2.mp4';
import R from "./Images/RadoHR.webp";
class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <img src={Arp} className="p1" alt="Asus" width={300} height={300}/>
                        <img src={Iphone14} className="p2" alt="Iphone" width={300} height={300}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <video src={video1} width="600" height="300" controls="controls" autoplay="true" className="videos"/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <img src={op} className="p1" alt="oneplus" width={300} height={300}/>
                    <img src={R} className="p2" alt="oneplus" width={300} height={300}/>
                    </div>

                </div>
                <h2 style={{marginTop:"21%" , textAlign:"center", fontFamily:"cursive", color:"white"}}><a href="http://localhost:3000/about">About</a></h2>
            </div>
            
            
        );
    }
}

export default Home;