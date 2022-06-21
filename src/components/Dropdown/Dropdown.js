import React from "react";

const Dropdown = (props) => {

    const dropdownChanged = (e) => {
        props.changed(e.target.value);
    };
    // console.log()

    return (
        <div className="col">
            {props.label} <br/>

            <select value={props.selectedValue} onChange={dropdownChanged}>
                {props.items.map((item) => <option key={item.value} value={item.value}> {item.name} </option>)}
            </select>
        </div>    
    );
};

export default Dropdown;

// props.selectedValue !== null ? props.selectedValue : props.items.at(0).value