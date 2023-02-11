import "./About.css";
import React from "react";

const About = ({hero}) => {
    return <div className="about-me">
            <p>--------------About me--------------</p>
        {hero.aboutMe.map((info) => {
            return (
                <div key={JSON.stringify(info)}>
                    <p>{info.info}</p>
                </div>
            )
        })}
    </div>
}

export default About;