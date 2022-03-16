import { Button } from 'react-bootstrap'
import ButtonTest from './Button.js'
import Card from 'react-bootstrap/Card'
const buttontext = "PROJECTS"

const InformationCard = (props) => {
    return (
        <div className="informationCard">
        <h1>About me</h1>
        <hr></hr>
        
        <p className="infoP">
            My interests lie in technology and how it can produce value to people and organizations. To me, data science and Web development are the most appealing areas of tech.
        </p>
        <p className="infoP">
            The combination of an intriguing bachelors (information systems) at Uppsala University and a rewarding full stack development internship led to the decision of deepening my knowledge within the areas of my interests.
            Therefore, I chose to study for a Master's degree at the Royal Institute of Technology located in Stockholm, Sweden. The program is called software engineering of distributed systems which concerns designing and implementing solutions for various large scale systems. For example, implementing an optimized consensus algorithm (OmniPaxos)in large scale storage systems.

        </p>


        <p className="infoP">
            Besides distributed system courses, I have taken various data science and machine learning courses such as deep learning, scalable machine learning, and data mining. The ability to find patterns in vast datasets using different techniques is ridiculously interesting and something I want to do during my career. 

        </p>


        <p className="infoP">
            When I don't solve challenging tech problems, I usually practice Thai Boxing, socialize with people or cook food.
        </p>

        <p className="infoP">
            Check out some of my projects :)
            <ButtonTest text={buttontext}/>

        </p>
        <hr></hr>

    </div>
    );  
}
export default InformationCard