import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../utilites/utils';

const ThemeToggle = () => {
    let [isDarkMode,setIsDarkMode]=useState(false);

    useEffect(()=>{

        let storedTheme = localStorage.getItem("theme");
        if(storedTheme==='dark'){
            setIsDarkMode(true);
             document.documentElement.classList.add("dark")
        }else{
            
             document.documentElement.classList.remove("dark")
        }


    },[])

    
    let toggleTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
             localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }
    return <button onClick={toggleTheme} className={cn('z-50 p-2 rounded-full transition-colors duration-300','focus:outline-hidden')}>{isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'></Sun> : <Moon className='h-6 w-6 text-blue-900'></Moon>}</button>
};

export default ThemeToggle;