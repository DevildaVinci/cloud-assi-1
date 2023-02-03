import React from "react";
import "./list.css"

const Lists = (props) => {

        const deleteTask = () => {
                
        }

        return (<div className="task">
                <button className="del"
                onClick={deleteTask}>X</button>
                <li className="disp"> {props.task}</li>
                </div>
        );
};


export default Lists;