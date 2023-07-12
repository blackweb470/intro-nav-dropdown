import React from "react";
import Hero from "./images/image-hero-desktop.png"
import MobileHero from "./images/image-hero-mobile.png"
import DataBiz from "./images/client-databiz.svg"
import AudioPhile from "./images/client-audiophile.svg"
import Marker from "./images/client-maker.svg"
import Meet from "./images/client-meet.svg"

 function HomeBody () {

    return(
        <div>
            <div className="grid font-popins md:px-20 lg:px-32 xl:px-44 pt-5 md:pt-32 xl:pt-10  md:grid-cols-2 gap-20">
                <div className="order-2 md:order-1 text-center md:text-left space-y-10  md:space-y-24 lg:space-y-24">
                    <h1 className="md:text-3xl text-almost-black md:text-left xl:text-5xl font-extrabold"><h1 className="hidden md:block">Make</h1><span className="md:hidden">Make</span> remote Work</h1>
                    <p className="text-xl text-almost-grey">Make remote work Get your team in sync, no matter your location. 
                        Streamline processes, 
                        create team rituals, and watch
                         productivity soar.</p>
                         <button className="w-40 text-White hover:text-almost-black hover:bg-White hover:border-almost-grey transition-all ease-out duration-100 border bg-almost-black h-12 rounded-xl">Learn more</button>
                         <div className="flex justify-center w-28 mx-auto md:mx-0 md:justify-normal gap-4 md:gap-10 md:w-20 p-7 md:p-5 lg:w-24 xl:w-32">
                            <img  src={DataBiz} alt="data" />
                            <img src={AudioPhile} alt="data" />
                            <img src={Meet} alt="data" />
                            <img src={Marker} alt="data" />
                         </div>
                </div>
                <div className="md:w-50% order-1 md:order-2">
                    <img className="hidden md:block h-30rem"  src={Hero} alt="Hero"></img>
                    <img className="block md:hidden w-screen" src={MobileHero} alt="Hero"></img>
                </div>
            </div>
            </div>
    )
}

export default HomeBody;