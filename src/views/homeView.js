import React, { useEffect } from 'react'
import ButtonTest from '../components/Button.js'
import Header from '../components/Header.js';
import Speechbubble from '../components/Speechbubble.js';
import aki3 from '../img/aki3.png';
import Footer from '../components/Footer.js';
import { useState } from 'react'
const info = ["Hello, I am Aksel!", "Currently a MSc student @ KTH Stockholm.", "I am crazy about Thai boxing and cooking as well as...", "..data science and web development. Check me out!"]
const buttontext = ["CLICK ME", "ABOUT ME"]
const testTodo = "TODO:"

const HomeView = () => {
  const [state, setState] = useState('start')

  //var clickCount = 0;

  const hej = () => {
    if(state == 'start') {setState('bubble')};
    if(state == 'bubble') {setState('bubble1')};
    if(state === 'bubble1') {setState('bubble2')}
    if(state === 'bubble2') {setState('bubble3')}
  }

  return (

    <div>
      
      <span className="bubble">
 
        <ButtonTest text={buttontext[0]} addBubble={hej} />

        {state!='start' && <Speechbubble text={state==='bubble' ? info[0] : info[0]}/>}
        {(state!='start' && state!='bubble') && <Speechbubble text={state==='bubble1' ? info[1] : info[1]}/>}
        {(state!='start' && state!='bubble' && state!='bubble1') && <Speechbubble text={state==='bubble2' ? info[2] : info[2]}/>}
        {(state!='start' && state!='bubble' && state!='bubble1' && state!='bubble2') && <Speechbubble text={state==='bubble3' ? info[3] : info[3]}/>}
        {(state!='start' && state!='bubble' && state!='bubble1' && state!='bubble2') && <ButtonTest aboutMe={"./aboutMeView.js"}text={state==='bubble3' ? buttontext[1]: buttontext[1]}/>}

      </span>
      <span className="image">
        <img src={aki3} className="aki"></img>

      </span>

    </div>


  );

}


export default HomeView
