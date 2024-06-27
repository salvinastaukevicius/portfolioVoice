import "./MyVoiceSection.css";
import images from './assets/images/arrow.svg';
import ScrollCircle from "./ScrollCircle";

import React from 'react'
import ReactDOM from 'react-dom/client'


const MyVoiceSection = () => {
  return (

    <section id="myVoiceSection">
      <div id="textMyVoice">
        MY <br /> CONFIDENCE <br />
      </div>
      <div id="textJourney">JOURNEY - <br/> my voice</div>
      <div id="circle">
      <img src={images} id="arrow"></img>
        <ScrollCircle />
      </div>
    </section>
  );
};

export default MyVoiceSection;
