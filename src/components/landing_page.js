import React from 'react';
import blueWaves from '../assets/images/landing/data-texture-blue-waves-1920x600-blue.png';

export default props =>{
    return(
        <div className='hero'id= "hero" >
        
        <div className='landing-img' id="landing" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: "0", justifyContent: 'center', alignItems: 'center' , zIndex: -1 }}>
            <img src={blueWaves} alt="landing imd"/>
            
        </div>
        {/* <h6> Full Stack Software Engineer with expert knowledge of </h6> */}
        </div>
    );
}