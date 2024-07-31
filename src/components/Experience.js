import React from "react";
import CollapsibleComponent from './collapsibleComponent';
// import ExperienceDetails from "./ExperienceDetails"; No longer used, replaced by CollapsibleComponent

const Experience = ({title, experienceList}) => {
    return(
        <div>
            <div className="experience">
                <h2>{title}</h2>
                {experienceList.map((exp, index) => (
                    <>
                        <CollapsibleComponent 
                            title={exp.title} 
                            company={exp.company}
                            duration={exp.duration} 
                            description={exp.description} />
                    </>
                ))}
                
            </div>
        </div>
    )
}

export default Experience;