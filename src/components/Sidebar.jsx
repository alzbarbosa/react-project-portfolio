import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import {BiMessageDetail} from "react-icons/bi"
import {FaBriefcase} from "react-icons/fa"
import {AiOutlineHome} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {FiUser} from "react-icons/fi"
import {VscColorMode} from "react-icons/vsc"


const Sidebar = () => {
  const [displayText, setDisplayText] = useState(false)

  const showAndHide = displayText? "show-text" : "hide-text"

  const getThemeMode = () => {
    document.body.classList.toggle("light-mode")
  }

  return (
      <>
        <div className="controls">
            <div className="control-container">
            <NavLink  className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/"><AiOutlineHome onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}/></NavLink>
            <p className={`control-text ${showAndHide}`}>Home</p>
            </div>
            <div className="control-container">
             <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/curriculum"><BsInfoCircle  onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}/></NavLink>
             <p className={`control-text ${showAndHide}`}>Curriculum</p>
            </div>
            <div className="control-container">
            <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/portfolio"><FaBriefcase  onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}/></NavLink>
            <p className={`control-text ${showAndHide}`}>Portfolio</p>
            </div>
            <div className="control-container">
                <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/aboutme"><FiUser  onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}/></NavLink>
                <p className={`control-text ${showAndHide}`}>About Me</p>
            </div>
            <div className="control-container">
               <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/contact"><BiMessageDetail  onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}/></NavLink>
               <p className={`control-text ${showAndHide}`}>Contact</p>
            </div>
        </div>
        
    </>
  )
}

export default Sidebar
