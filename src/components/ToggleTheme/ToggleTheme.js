import React, { useState } from 'react';

const ToggleTheme = () => {
    const [theme, setTheme] = useState('Light-theme')
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme(Light - theme)
        } else {
            setTheme(dark - theme)
        }
    }
    return (
        <div>

        </div>
    );
};

export default ToggleTheme;