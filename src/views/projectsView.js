import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard';
import Carousel from 'react-bootstrap/Carousel'
import Loader from '../components/Loader.js'

const hej = "Some quick example text to build on the card title and make up the bulk of the card's content."

// readme: https://raw.githubusercontent.com/akseluhr/binary-classifications/main/README.md
// starred: https://api.github.com/users/akseluhr/starred

const projectNames = [];
const projectDescriptions = [];
const projectPaths = [];
const projectLanguages = [];


const ProjectsView = () => {
    const [title, setTitle] = useState('')
    const [descript, setDescription] = useState('')
    const [path, setUrl] = useState('')
    const [planguage, setLanguage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState('')

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/users/akseluhr/starred')
            .then(res => res.json())
            .then(data => {

                setData(data[0])
                setData(data[1])
                setData(data[2])
                setData(data[3])
                setData(data[3])
            })
            .catch(err);
    }, []);

    const setData = ({
        name,
        description,
        html_url,
        language
    }) => {

        setTitle(name);
        setDescription(description);
        setUrl(html_url);
        setLanguage(language);

        projectNames.push(name)
        projectDescriptions.push(description)
        projectPaths.push(html_url)
        projectLanguages.push(language)
        setIsLoading(false);

        console.log(projectPaths)
    };
    return (
   
        <Carousel variant='dark'>
            <Carousel.Item interval={20000}>
                <div className="projectCards">
                
                    {!isLoading ? (<ProjectCard title={projectNames[0]} language={"Language: " +projectLanguages[0]} text={projectDescriptions[0]} href={projectPaths[0]} />) : <ProjectCard text={<Loader/>} />}
                    {!isLoading ? (<ProjectCard title={projectNames[1]} language={"Language: " +projectLanguages[1]} text={projectDescriptions[1]} href={projectPaths[1]} />) : <ProjectCard text={<Loader/>} />}
                    {!isLoading ? (<ProjectCard title={projectNames[2]} language={"Language: " +projectLanguages[2]} text={projectDescriptions[2]} href={projectPaths[2]} />) : <ProjectCard text={<Loader/>} />}

                </div>
            </Carousel.Item>
            <Carousel.Item interval={20000}>
                <div className="projectCards">

                    <ProjectCard title={projectNames[3]} language={"Language: " + projectLanguages[3]} text={projectDescriptions[3]} href={projectPaths[3]} />
                    <ProjectCard title={projectNames[4]} language={"Language: " + projectLanguages[4]} text={projectDescriptions[4]} href={projectPaths[4]} />
                   

                </div>
            </Carousel.Item>
        </Carousel>



    );

}


export default ProjectsView
