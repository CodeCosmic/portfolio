import './header.css'
import spike from '../../Assets/Images/spike-spiegel.jpg'

const Header = () => {
    return(
        <>
        <div className='header'>
            <span className="headerSpan">Roger Martinez</span>
            <img className='headerImg' alt='' src={spike}/>
        </div>
        <div>
            <a href='https://www.google.com'>Google</a>
        </div>
        </>
    )
}

export default Header;
