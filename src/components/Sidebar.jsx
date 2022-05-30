import { useState} from "react"
import { NavLink } from "react-router-dom"

import {BiMessageDetail} from "react-icons/bi"
import {FaBriefcase} from "react-icons/fa"
import {AiOutlineHome} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {FiUser} from "react-icons/fi"


const Sidebar = () => {
  const [displayText, setDisplayText] = useState(false)

  const showAndHide = displayText? "show-text" : "hide-text"

  return (
      <>
        <div className="controls" onMouseOver={()=>setDisplayText(true)} onMouseOut={()=> setDisplayText(false)}>
            <div className="control-container">
            <NavLink  className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/"><AiOutlineHome /></NavLink>
            <p className={`control-text ${showAndHide}`}>Home</p>
            </div>
            <div className="control-container">
             <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/curriculum"><BsInfoCircle  /></NavLink>
             <p className={`control-text ${showAndHide}`}>Curriculum</p>
            </div>
            <div className="control-container">
            <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/portfolio"><FaBriefcase /></NavLink>
            <p className={`control-text ${showAndHide}`}>Portfolio</p>
            </div>
            <div className="control-container">
                <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/aboutme"><FiUser  /></NavLink>
                <p className={`control-text ${showAndHide}`}>About Me</p>
            </div>
            <div className="control-container">
               <NavLink className={(navigationData) => (navigationData.isActive ? 'control active-btn' : 'control')} to="/contact"><BiMessageDetail /></NavLink>
               <p className={`control-text ${showAndHide}`}>Contact</p>
            </div>
        </div>
        
    </>
  )
}

export default Sidebar
