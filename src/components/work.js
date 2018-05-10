import React from 'react';

import Card from './card';
import workDataArray from '../assets/data/work_data';
import WordCloud from '../assets/images/landing/wordcloud_ahmet.svg';

export default props=>{
    // const WordCloud = require ('../assets/images/landing/wordcloud_ahmet.svg')
    const cardList = workDataArray.map((item, index) =>{
        return(
            <Card title={item.name} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink} giphy={item.giphy} youtube={item.youtube}/>
        );
    });
    return(
        <section id='work' style={{paddingTop: "150px"}}>

            <hr/>
            <br />
            <div className="col m6 s12" >
                <h4 style={{ color: "#0cb5f0", fontSize: "2.2em", paddingTop: "20px", paddingBottom: "1%",      }
        } > Some of the Projects... </h4>
            {/* <WordCloud /> */}
            <img style={{ paddingLeft: "10%", width: "100%", paddingRight: "10%" }} src={WordCloud} alt="Wordcloud" />
            </div>
            <div className="row">
            {cardList}
            </div>
        </section>
    );
}