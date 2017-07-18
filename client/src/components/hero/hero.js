import React from 'react';
import './style.css';


const Hero = () => {
  return(
    <div>
      <section className="banner">
        <div className="fullscreen-bg">
          <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
              <source src={require("../../images/sevensVid.mp4")} type="video/webm" />
          </video>
        </div>
      </section>
      <section className="firstSection container">
        <div className='headerWrapper'>
          <h1 className="title">Sevens</h1><h1 className="subtitle">Clothing</h1>
          </div>
          <p>It Wasn't Luck</p>
      </section>
    </div>
  )
}

export default Hero;