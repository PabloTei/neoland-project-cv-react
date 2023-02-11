import React from "react";
import "./Education.css";

const Education = ({education}) => {
    return (
        <div className="education-card">
            <div>
                {education.map((item) => {
                   return (
                    <div key={JSON.stringify(item)}>
                        <p className="name">📕 {item.name}</p>
                        <p>{item.where}</p>
                        <p>{item.date}</p>
                    </div>
                   )
                    
                })}
            </div>
        </div>
    )
}

export default Education;