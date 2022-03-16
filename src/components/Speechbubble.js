import React from 'react';
import { Button } from 'react-bootstrap'


const Speechbubble = (props) => {
    return (
        <div className="speechBubble" id="bubbleText">{props.text}</div>

         );
}
export default Speechbubble