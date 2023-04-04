import './header.css'
import spike from '../../Assets/Images/spike-spiegel.jpg'

const Header = () => {
    return(
        <>
        <div className='header'>
            <span className="headerSpan">Roger Martinez</span>
            <img className='headerImg' alt='' src={spike}/>
        </div>
        <div className='links'>
            <a className='btn' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/roger-martinez-3b9254139/'>Linkedin</a>
            <a className='btn' target='_blank' rel='noopener noreferrer' href='https://www.github.com/CodeCosmic'>Github</a>
        </div>
        </>
    )
}

export default Header;
