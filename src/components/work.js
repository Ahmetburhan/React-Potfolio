import React from 'react';

import Card from './card';
import workDataArray from '../assets/data/work_data';


export default props=>{
    
    const cardList = workDataArray.map((item, index) =>{
        return(
            <Card title={item.name} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink} giphy={item.giphy} youtube={item.youtube}/>
        );
    });
    return(
        <section id='work' style={{paddingTop: "150px"}}>

            <hr/>
            <br />
            <h4>Some of the Projects...</h4>
            <div className="row">
            {cardList}
            </div>
        </section>
    );
}