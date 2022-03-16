import { Button } from 'react-bootstrap'
import ButtonTest from './Button.js'
import Card from 'react-bootstrap/Card'
import gitHub from "../img/githubPic.png"
const buttontext = "PROJECTS"

/* TODO: Reneder multiple cards here or in presenter? */
const ProjectCard = (props) => {
    return (
        <div className="projectCard">
            <Card border="secondary" style={{ width: '18rem', height: '32em'}}>
                <Card.Img variant="top" height={180} src={gitHub} />
                <Card.Body className="projectCardBody">
                    <Card.Title>{props.title}</Card.Title>
                    <hr></hr>
                    <Card.Text>
                      {props.language === "Language: Jupyter Notebook" ? "Language: Python" : props.language}

                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    
                    <Button className="projectButton" style={{bottom:0}} href={props.href} variant="dark">Details</Button>

                </Card.Body>
            </Card>

        </div>
    );
}
export default ProjectCard