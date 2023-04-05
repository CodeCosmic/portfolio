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
        <div className='containerR'>
            <span className="homeLabelR" onClick={() => handleClick('about')} >-About-</span>
            <p className={`aboutPR ${isVisible.about ? 'box' : ''}`} id='aboutParagraph' >
                Hello! My name is Roger. I'm familiar with JavaScript, HTML and
                CSS. I've recently graduated from a full stack bootcamp that focused
                on using the React library and the MERN stack.
            </p>
        </div>
        <div className='containerL'>
            <span className="homeLabelL" onClick={() => handleClick('education')}>-Education-</span>
            <p className={`aboutPL ${isVisible.education ? 'box' : ''}`} id='educationParagraph'>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>
        </div>
        <div className='containerR'>
            <span className='homeLabelR' onClick={() => handleClick('another')}>Hello</span>
            <p className={`aboutPR ${isVisible.another ? 'box' : ''}`} id='anotherParagraph'>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>
        </div>
    </div>
    )
}

export default HomePage;
