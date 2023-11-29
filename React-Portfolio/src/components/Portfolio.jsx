import "../assets/styles/Portfolio.css";

function Portfolio () {
    return (
        <div>
            <div id = "portfolio">Portfolio</div>
            <div id = "portfolioProjectsContainer">
            <div className = "project">
                <img src = "/Crypt0-Z0ne.png" className = "projectImage"></img>
            </div>
            <div className = "project">
                <img src = "/Bug-Crushers.png" className = "projectImage"></img>
            </div>
            <div className = "linebreak"></div>
            <div className = "project">
                <img src = "/Module Challenge 4.png" className = "projectImage"></img>
            </div>
            <div className = "project">
                <img src = "/Module Challenge 5.png" className = "projectImage"></img>
            </div>
            <div className = "linebreak"></div>
            <div className = "project">
                <img src = "/Module Challenge 6.png" className = "projectImage"></img>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;