'use client'
import { useTheme } from "next-themes"



const Toggle=()=>{

    const {setTheme}=useTheme();
    const handledarkClick=()=>{
        setTheme("dark");
    }

    const handleLightClick=()=>{
        setTheme("light");
        
    }
    return(
    <div className="flex flex-row gap-2">
        <button className="p-2 border-2 rounded-lg text-center" onClick={handledarkClick}>Dark</button>
        <button className="p-2 border-2 rounded-lg text-center" onClick={handleLightClick}>Light</button>
    </div>
    )
}

export default Toggle;