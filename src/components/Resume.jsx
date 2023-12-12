import "../assets/styles/Resume.css";

function Resume () {
    return (
        <div id = "resumeContainer">
            <div>
                <div id = "resumeHeader">Resume</div>
                <div id = "resumeDownload">
                    Download my 
                    <a id = "resumeLink" href = "/Dummy_Resume.jpeg" download = "/Dummy_Resume.jpeg">resume</a>
                </div>
            </div>
            <div id = "frontEndSkills">
                <div id = "frontEnd">Front-End Proficiencies</div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div id = "backEndSkills">
                <div id = "backEnd">Back-End Proficiencies</div>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;