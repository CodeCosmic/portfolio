import React, { useState } from 'react';
import Switch from 'react-switch';
import './darkModeToggle.css'

const DarkToggle = () => {
    const [checked, setChecked] = useState(false)

    const checkHandler = (checked) => {
        setChecked(checked)
        document.body.classList.toggle('light-mode')
        const modeIndicator = document.getElementById('modeIndicator')
        if(!checked){
            modeIndicator.classList.remove('lightSpan')
            modeIndicator.classList.add('darkSpan')
        } else {
            modeIndicator.classList.remove('darkSpan')
            modeIndicator.classList.add('lightSpan')
        }
       // const headerSpan = document.getElementById('headerSpan')
       // headerSpan.innerText = checked ? 'Dark mode is on' : 'Dark mode is off'
    }

    return(
        <div className='darkModeSwitch'>
            <span className='darkSpan' id='modeIndicator'>{checked ? 'Light' : 'Dark'}</span>
            <Switch
                onChange={checkHandler}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor='#ec1c24'
                offColor='#24292e'
            />
        </div>
    )
}

export default DarkToggle;
