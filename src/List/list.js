import React from "react";
import "./list.css"

const Lists = (props) => {


        return (<div className="task">
                <button className="del"
                onClick={()=> {
                        props.onSelect(props.id)
                }}>X</button>
                <li className="disp"> {props.task}</li>
                </div>
        );
};


export default Lists;