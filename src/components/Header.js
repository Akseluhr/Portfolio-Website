import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Switch, Route, Link, Router } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react'
import SmallLoader from './SmallLoader';


//             const weatherData = data.timeSeries[0].parameters;
// return weatherData[10].values[0] + '°C,    ' + weatherData[2].values[0] + 'mm,    ' + weatherData[17].values[0] + 'm/s';
const Header = (props) => {
    const [celsius, setCelsius] = useState('')
    const [rain, setRain] = useState('')
    const [time, setTime] = useState('')
    const [sky, setSymbol] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState()

    useEffect(() => {
        setIsLoading(true);
        fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.0817/lat/59.3242/data.json')
            .then(res => res.json())
            .then(data => {
                //Latest data update
                const weatherData = data.timeSeries[0].parameters;
                var today = new Date();
                var currentTime = today.getHours()
                //Celsius
                setCelsius(weatherData[10].values[0])

                setRain(weatherData[2].values[0])
                setSymbol(weatherData[18].values[0])
                setTime(currentTime)
                setIsLoading(false);

                
            })
            .catch(err);
    }, []);

 
    return (

            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand href="#home">Aksel Uhr</Navbar.Brand>

                        </LinkContainer>
                        <Nav className="me-auto">
                            <LinkContainer to="/aboutme">
                                <Nav.Link>About me</Nav.Link> 
                            </LinkContainer>

                        </Nav>
                        <Nav className="me-auto">
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link> 
                            </LinkContainer>

                        </Nav>
                        <Nav className="me-auto">
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link> 
                            </LinkContainer>

                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {!isLoading ? (celsius + '°C ') : <SmallLoader/>}<a> </a> 
                            </Navbar.Text>
                            <Navbar.Text>
                                {(time < 20 && time > 8) && (sky <=4) ? <span className="status">&#127774;</span> : (time < 20 && time > 8) && (sky > 5) ? <span className="status">&#127783; </span> : <span className="status">&#127773;</span>}
                                {(time < 20 && time > 8) && (sky <=4) ? <span className="status">Sun! See you outdoors</span> : (time < 20 && time > 8) && (sky > 5) ? <span className="status"> Rain! Movietime</span> : <span className="status"> Sleepytime</span>}

                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

    );
}
/* 
<Nav.Link as={Link} to="./views/aboutMeView.js">About me</Nav.Link>
                        <Nav.Link as={Link} to="./views/projectsView.js">Projects</Nav.Link>
                        <Nav.Link as={Link} to="./views/contactView.js">Contact</Nav.Link>
*/
export default Header

/*
                            <LinkContainer to="/">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer> */