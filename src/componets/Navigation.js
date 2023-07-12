import React, { useState } from "react";
import Logo from "../componets/images/logo.svg"
import Dropdown from "./Dropdown";
import TodoListIcon from "./images/icon-todo.svg"
import CalenderIcon from "./images/icon-calendar.svg"
import ReminderIcon from "./images/icon-reminders.svg"
import PlaningIcon from "./images/icon-planning.svg"
import MenuIcon from "./images/icon-menu.svg"
import '../index.css'
import CloseIcon from "./images/icon-close-menu.svg"
import DownIcon from "./images/icon-arrow-down.svg"
import UpIcon from "./images/icon-arrow-up.svg"
import MobileMenu from "./MobileMenu";

function Navigation () {
const [IsOpen, setIsOpen] = useState(false)
const [IsOpen2, setIsOpen2] = useState(false)
const [openMenu, setOpenMenu] = useState(false)


    return(
        <div>
            <div className="md:flex font-popins hidden text-almost-grey bg-White justify-between p-10">
              <ul className="flex gap-14">
                <div className=" cursor-not-allowed">  <img src={Logo} alt="Logo" /></div>
                 <div className="Navigation  hidden md:flex gap-16 ">
                 <li onClick={() => setIsOpen((prev) => !prev)} className="group cursor-pointer relative"><div className="flex gap-1 hover:text-almost-black"><div>Features</div><div>{!IsOpen ? <img alt="" className="pt-2" src={DownIcon}/> : <img className="pt-2" alt="" src={UpIcon}/>  }</div></div>
                 {!IsOpen ?  "" :    
                <div className="-left-28  hidden md:block absolute  font-medium shadow-xl p-10 rounded-xl space-y-4  bg-white  ">
                <Dropdown text="TodoList" img={TodoListIcon} />
                <Dropdown text="Calender" img={CalenderIcon} />
                <Dropdown text="Reminders" img={ReminderIcon} />
                <Dropdown text="Planing" img={PlaningIcon} />
                </div> }
                 </li>
                    <li onClick={() => setIsOpen2((prev) => !prev)}className="group cursor-pointer">
                    <div className="flex gap-1 group-hover:text-black"><div>Company</div><div>{!IsOpen2 ? <img alt="" className="pt-2 group-hover:text-black" src={DownIcon}/> : <img className="pt-2" alt="" src={UpIcon}/>  }</div></div>
                {!IsOpen2 ? "" : 
                <div className="absolute hidden md:block pt-7 font-medium shadow-xl w-32 h-40 rounded-xl space-y-4  bg-white">
                <Dropdown text="History" />
                <Dropdown text="Our Team"/>
                <Dropdown text="Blog" />
                </div>}
                    </li>
                    <li className="cursor-pointer hover:text-almost-black">Careers</li>
                    <li className="cursor-pointer hover:text-almost-black">About</li>
                 </div>
                </ul>
                <div>
                <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-lg hover:text-almost-black">Login</li>
                <li className="md:w-20 text-lg hover:border-almost-black hover:text-almost-black -mt-3 xl:w-40 flex justify-center items-center cursor-pointer border hover:border-2 border-almost-grey h-12 rounded-md">Register</li>
              </ul>
                </div>
              </div>
             
                <div className="mobile-Navigation relative md:hidden">
                  <div className="p-10 flex justify-between">
                    <img src={Logo} alt="logo" className=" cursor-not-allowed" />
                   <div onClick={() => setOpenMenu((prev) => !prev)}>
                    {!openMenu ?  <img src={MenuIcon} alt="menu" className="cursor-pointer" /> :  <img src={CloseIcon} alt="menu" className="cursor-pointer" />  }
                   </div>
                  </div>
                  {!openMenu ? "" : <MobileMenu />}
                </div>
            </div>
    )

} 

export default Navigation;