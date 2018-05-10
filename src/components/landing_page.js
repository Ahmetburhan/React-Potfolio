import React from 'react';
import blueWaves from '../assets/images/landing/data-texture-blue-waves-1920x600-blue.png';

export default props =>{
    return(
        <div className='hero'id= "hero" >
        {/* <h6> Full Stack Software Engineer with expert knowledge of </h6> */}
        <div className='landing-img'id="landing">
            <img src={blueWaves} alt="landing imd"/>
        </div>
        </div>
    );
}