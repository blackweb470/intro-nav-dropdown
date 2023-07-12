import React from "react";

const Dropdown = (props) => {

    return(
        <div>
            <p className="flex gap-7 hover:text-almost-black">
            <img src={props.img} alt={props.alt} />
                {props.text}
                </p>
        </div>
    )
}

export default Dropdown