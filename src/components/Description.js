import React from "react";

const Description = ({description}) => {
    return(
        <div>
            {description.map((item) => (
                <p className="desc-item">- {item}</p>
            ))}
        </div>
    )
}

export default Description;