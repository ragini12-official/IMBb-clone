'use client'

import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeToggler() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => {
        setMounted(true)
    }, []);

  
    return (
        <div className=''>
            {
                mounted && (currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/> : <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>)
            }
        </div>
  )
}

/**
 * Using the above code, the component is rightfully being rendered
 * and clicking on the mode icon toggles the theme from dark to light 
 * and vice-versa. There is however just a slight glitch that is causing
 * small and subtle issue in the UI. On reloading the page, if the currentMode
 * is light, it rightfully displays the dark mode 'moon' icon clicking on which
 * will change the theme to dark. However, if the currentMode is dark, then the icon
 * being rendered is supposed to be the light mode 'sun' icon, but it is the dark mode
 * icon instead. So in short, if, on reloading, the currentMode is dark, then the problem
 * wrong icon display occurs.
 * 
 * 
 * ISSUE RESOLVED!
 **/



