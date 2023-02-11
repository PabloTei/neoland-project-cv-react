import React from "react";
import "./More.css";

const More = ({languages, habilities, volunteer}) => {
    return (
        <div className="more">

            <div className="languages">
                <p>{languages.language}</p>
                <p>{languages.wrlevel}</p>
                <p>{languages.splevel}</p>
            </div>

            <div className="habilites">
                {habilities.map((habilitie) => {
                    return (
                        <div key={JSON.stringify(habilitie)}>
                            <p>{habilitie}</p>
                        </div>
                    )
                })}
            </div>

            <div className="volunteer">
                {volunteer.map((volunte) => {
                    return (
                        <div key={JSON.stringify(volunte)}>
                            <p>{volunte.name}</p>
                            <p>{volunte.where}</p>
                            <p>{volunte.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )   
}

export default More;