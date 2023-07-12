import React, {useState} from "react";
import TodoListIcon from "./images/icon-todo.svg"
import CalenderIcon from "./images/icon-calendar.svg"
import ReminderIcon from "./images/icon-reminders.svg"
import PlaningIcon from "./images/icon-planning.svg"
import Dropdown from "./Dropdown";
import DownIcon from "./images/icon-arrow-down.svg"
import UpIcon from "./images/icon-arrow-up.svg"


function MobileMenu() {
    const [mobileSubNavOpen, setmobileSubNavOpen] = useState(false)
    const [mobileSubNavOpen2, setmobileSubNavOpen2] = useState(false)
    return(
        <div>
 <nav className="absolute text-lg font-semibold bg-White h-screen pl-10 pt-0 right-0 p-20 text-almost-grey">
                    <ul className=" space-y-7">
                    <li className=" cursor-pointer"  onClick={() => setmobileSubNavOpen((prev) => !prev)}>
                    <div className="flex gap-1"><div>Features</div>
                    <div>{!mobileSubNavOpen ? <img alt="" className="pt-3" src={DownIcon}/> : <img className="pt-3" alt="" src={UpIcon}/>  }</div></div>
                    {!mobileSubNavOpen ? "" :
                    <div className="dropDownClose  font-medium p-4 space-y-3">
                    <Dropdown text="TodoList" img={TodoListIcon} />
                    <Dropdown text="Calender" img={CalenderIcon} />
                    <Dropdown text="Reminders" img={ReminderIcon} />
                    <Dropdown text="Planing" img={PlaningIcon} />
                    </div>
                    }
                    </li>
                    <li className=" cursor-pointer" onClick={() => setmobileSubNavOpen2((prev) => !prev)}>
                    <div className="flex gap-1"><div>Features</div>
                    <div>{!mobileSubNavOpen2 ? <img alt="" className="pt-3" src={DownIcon}/> : <img alt="" className="pt-3" src={UpIcon}/>  }</div></div>
                    {!mobileSubNavOpen2 ? "" :
                  <div className="p-4 space-y-2">
                  <Dropdown text="History" />
              <Dropdown text="Our Team"/>
              <Dropdown text="Blog" />
              </div>
                    }
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                    <li className="text-center">Login</li>
                    <button className="w-40 h-10 text-almost-grey  cursor-pointer border-almost-grey border-solid border-2  rounded-xl">Register</button>
                    </ul>
                  </nav>
        </div>
    )
}


export default MobileMenu;