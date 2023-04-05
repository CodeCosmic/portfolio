import React, { useState } from 'react';
import Switch from 'react-switch';
import './darkModeToggle.css'

const DarkToggle = () => {
    const [checked, setChecked] = useState(false)

    const checkHandler = (checked) => {
        setChecked(checked)
        document.body.classList.toggle('dark-mode')
        const modeIndicator = document.getElementById('modeIndicator')
        if(!checked){
            modeIndicator.classList.remove('darkSpan')
            modeIndicator.classList.add('lightSpan')
        } else {
            modeIndicator.classList.remove('lightSpan')
            modeIndicator.classList.add('darkSpan')
        }
       // const headerSpan = document.getElementById('headerSpan')
       // headerSpan.innerText = checked ? 'Dark mode is on' : 'Dark mode is off'
    }

    return(
        <div className='darkModeSwitch'>
            <span className='lightSpan' id='modeIndicator'>{checked ? 'Dark' : 'Light'}</span>
            <Switch
                onChange={checkHandler}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor='#24292e'
                offColor='#ec1c24'
            />
        </div>
    )
}

export default DarkToggle;
