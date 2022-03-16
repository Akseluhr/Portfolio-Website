import React from 'react';
import { Button } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';


const ButtonTest = (props) => {
    return (
        <button className="buttonInfo" href={props.aboutMe} onClick={props.addBubble}>{props.text}</button>
    );
}
export default ButtonTest

