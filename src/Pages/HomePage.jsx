import './homePage.css'
import { useState } from 'react'

const HomePage = () => {
    const [isVisible, setIsVisible] = useState({
        about: true,
        education: true,
        another: true,
    })

    const handleClick = (label) => {
        setIsVisible((prevState) => ({
        ...prevState,
        [label]: !prevState[label],
        }))
    }

    return(
    <div>
        <div className='container'>
        {/*    <button className='infoLabel' onClick={() => handleClick('about')} type="">{isVisible.about ? ''  : <p className='blink'>&gt;</p>}About</button>*/}
        <span className="infoLabel" onClick={() => handleClick('about')} >{isVisible.about ? ''  : <span className='blink'>&gt;</span>}About</span>
            <p className={`infoContent ${isVisible.about ? 'hide' : ''}`} id='aboutParagraph' >
                Hello! My name is Roger. I hold a bachelors degree in Finance and worked as a
                Data Analyst. While working as a Data Analyst I found my passion in coding and
                decided to dive into it so I completed a full stack bootcam from NuCamp in March
                of 2023. I have about 8 months of experience in <span className='highlight'>full stack</span> development
                with a focus on JavaScript, HTML and CSS and MERN stack technologies. I'm passionate
                about creating webpages and I strive to make a positive impact in the world.
            </p>
        </div>
        <div className='container'>
            <span className="infoLabel" onClick={() => handleClick('education')}>{isVisible.education ? ''  : <span className='blink'>&gt;</span>}Skills</span>
            <div className={`infoContent ${isVisible.education ? 'hide' : ''}`} id='educationParagraph'>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Next.js</li>
                </ul>
            </div>
        </div>
        <div className='container'>
            <span className='infoLabel' onClick={() => handleClick('another')}>{isVisible.another ? ''  : <span className='blink'>&gt;</span>}Projects</span>
            <p className={`infoContent ${isVisible.another ? 'hide' : ''}`} id='anotherParagraph'>
                Lorem ipsum dolor sit amet,
            </p>
        </div>
    </div>
    )
}

export default HomePage;
