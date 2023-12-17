import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body')!.setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark')
    };

    const setLightMode = () => {
        document.querySelector('body')!.setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light')
    };

    const selectedheme = localStorage.getItem('selectedTheme');

    if (selectedheme === 'dark') setDarkMode();

    const toggletheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggletheme}
                defaultChecked={selectedheme ==='dark'}

            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
