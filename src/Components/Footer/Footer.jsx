import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <span className='blink'>&gt;</span>
                <a className='btnFoot' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/roger-martinez-3b9254139/'>Linkedin</a>
                <span className='footerSpan'>Contact</span>
                <a className='btnFoot' target='_blank' rel='noopener noreferrer' href='https://www.github.com/CodeCosmic'>Github</a>
                <span className='blink'>&lt;</span>
            </div>
        </>
    )
}

export default Footer;
