import React from "react";
import ExperienceDetails from "./ExperienceDetails";

const Experience = ({title, experienceList}) => {
    return(
        <div className="experience">
            <h2>{title}</h2>
            {experienceList.map((exp, index) => (
                <ExperienceDetails 
                    title={exp.title} 
                    company={exp.company}
                    duration={exp.duration} 
                    description={exp.description} />
            ))}
            
        </div>
    )
}

export default Experience;