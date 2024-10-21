import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutMe = () => {
    const [aboutMeHeading, setAboutMeHeading] = useState("This is Shubham's archaic online presence.");
    const [aboutMeDescription, setAboutMeDescription] = useState("Short description of yourself and your career. Short description of yourself and your career. Short description of yourself and your career.");

    useEffect(() => {
        axios.get('http://localhost:5000/aboutme')
        .then(function (response) {
            // handle success
            setAboutMeHeading(response.data.heading);
            setAboutMeDescription(response.data.description);
            console.log(response.data.heading, response.data.description);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []);

    return(
        <section className="about-me">
            <h2>{aboutMeHeading}</h2>
            <p>{aboutMeDescription}</p>
        </section>
    )
}

export default AboutMe;