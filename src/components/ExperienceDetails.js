import React from "react";

const ExperienceDetails = ({title, company, duration, description}) => {
    return(
        <div className="experience-details">
            <div className="experience-details-heading">
                <h3>- {title}, <span className="company">{company}</span></h3>
                <p>{duration}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceDetails;