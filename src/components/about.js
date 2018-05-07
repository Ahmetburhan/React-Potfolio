import React from 'react';

import about from '../assets/images/about/creative.png';
import berkeley from '../assets/images/about/berkeley.png';
import sfsu from '../assets/images/about/sfsu.png';
import techloop from '../assets/images/about/techloop.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>I started out as a project manager and business developer. I've managed cross-functional teams from marketing to developers and everything in between. In my experiences with development teams, I was always fascinated with the alchemy of transforming business requirements into beautifully written code for production.
            Ever since then, I never stopped learning because I really enjoy the process of figuring things out and there's is just a ton out there to discover. But also, I like building & creating interesting things and working my logic muscles in this rapidly evolving field of web development.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>
            <p className='text-faded'>My approach to UX/UI design and software development is to balance form and function. I think a design should be intuitive, visually balanced, and it allows the content to shine. Designs that create a great user experience are significant because they cause people to buy products from the same company over and over again. Additionally, implementing designs with code efficiency in mind will enhance performance, scalability, and overall product quality. With this approach, there is no limit on what can be achieved.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={berkeley} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing Berkeley's <em>Full Stack Web Development Program </em>has laid the foundation for my <strong>software development</strong> career reshaped.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={techloop} alt="Kingston" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                            I am a <strong>front-end software engineer</strong> with 5+ years of experience and 8+ years of start-up experience from all
the way down from seed funding to be acquired by VCs. Creating beautiful applications and prototyping
experiences make me happy. Hearing from customers
that they are loving the experience/having fun/being more productive/wanting more makes me want to do it again and again. Growing these up to scalable, commercially available product/service is a next-level
reward for me. Let's do the next Big thing together...

            </div>
        </div>
        <div className="col s12 m4">
            <img src={sfsu} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my bachelor's degree in <strong>Computer Science</strong> while applying SFSU's <em>Learn by Doing</em> approach is how I acquired my logical and analytical skills.
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}