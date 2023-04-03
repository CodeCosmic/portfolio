import React, { useState } from 'react';
import Switch from 'react-switch';
import './darkModeToggle.css'

const DarkToggle = () => {
    const [checked, setChecked] = useState(false)

    const checkHandler = (checked) => {
        setChecked(checked)
        document.body.classList.toggle('dark-mode')
       // const headerSpan = document.getElementById('headerSpan')
       // headerSpan.innerText = checked ? 'Dark mode is on' : 'Dark mode is off'
    }

    return(
        <div className='darkModeSwitch'>
        <Switch
            onChange={checkHandler}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#24292e'
            offColor='#bbb'
        />
        </div>
    )
}

export default DarkToggle;
