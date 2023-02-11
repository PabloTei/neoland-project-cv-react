import "./Experience.css";
import React from "react";

const Experience = ({experience}) => {
    return (
        <div className="experience-card">
            {experience.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                        <p className="name">{item.name}</p>
                        <p>{item.where}</p>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;