import React from 'react';

export default props =>{
    let demoBtn = null;
    if(props.demo !== ""){
        demoBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> demo</a>);
    } 
    let youtubeBtn = null;
    if (props.youtube !== "") {
        youtubeBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.youtube}><i className="material-icons right">video_library</i> youtube</a>);
    } 

    let giphyBtn = null;
    if (props.giphy !== "") {
        giphyBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.giphy}><i className="material-icons right">photo_library</i> giphy</a>);
    } 
    return(
    <div className="card col m6 s12">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator work-img" src={props.src} alt={props.alt}/>
        </div>
        <div className="card-content">
            <span className="card-title activator">{props.title}<i className="material-icons right">add</i></span>
            <a className="waves-effect waves-light btn" target="_blank" href={props.code}><i className="material-icons right">developer_mode</i> code</a>
            {demoBtn}   {youtubeBtn}   {giphyBtn}   
        </div>

        <div className="card-reveal">
            <span className="card-title card-open">{props.title}<i className="material-icons right">close</i></span>
            <p>{props.info}</p>
            <a className="waves-effect waves-light btn" target="_blank" href={props.code}><i className="material-icons right">developer_mode</i> code</a>
            {demoBtn}
        </div>
    </div>
    );
}