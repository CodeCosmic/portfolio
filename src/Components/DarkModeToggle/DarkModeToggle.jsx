import React, { useState } from 'react';
import Switch from 'react-switch';

const DarkToggle = () => {
    const [checked, setChecked] = useState(false)
    const [background, setBackground] = useState('light')

    const checkHandler = (checked) => {
        setChecked(checked)
        setBackground(checked ? 'dark' : 'light')
    }

    return(
        <Switch
            onChange={checkHandler}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#24292e'
            offColor='#bbb'
        />
    )
}

export default DarkToggle;
