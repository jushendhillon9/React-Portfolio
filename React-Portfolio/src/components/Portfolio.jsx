import "../assets/styles/Portfolio.css";

function Portfolio () {
    return (
        <div>
            <div id = "portfolio">Portfolio</div>
            <div id = "portfolioProjectsContainer">
            <div className = "project">
                <img src = "/Crypt0-Z0ne.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://jushendhillon9.github.io/Crypto-Zone/">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Crypto-Zone">
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
            <div className = "project">
                <img src = "/Bug-Crushers.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://bug-crushers-3204d0c3c501.herokuapp.com/login">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Bug-Crushers">
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
            <div className = "linebreak"></div>
            <div className = "project">
                <img src = "/Module Challenge 4.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://jushendhillon9.github.io/Code-Quiz-Module-Four-Challenge/">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Code-Quiz-Module-Four-Challenge"> 
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
            <div className = "project">
                <img src = "/Module Challenge 5.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://jushendhillon9.github.io/Work-Day-Scheduler-Module-5-Challenge/">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Work-Day-Scheduler-Module-5-Challenge">
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
            <div className = "linebreak"></div>
            <div className = "project">
                <img src = "/Module Challenge 6.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://jushendhillon9.github.io/Weather-Dashboard-Module-6-Challenge/">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Weather-Dashboard-Module-6-Challenge">=
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
            <div className = "project">
                <img src = "/Module Challenge 3.png" className = "projectImage"></img>
                <div className = "linebreak"></div>
                <a class = "buttons">
                    <a href = "https://jushendhillon9.github.io/Password-Generator-Module-3-Challenge/">
                        <button class = "linkButton">Live App</button>
                    </a>
                    <a href = "https://github.com/jushendhillon9/Password-Generator-Module-3-Challenge">
                        <button class = "linkButton">Github</button>
                    </a>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;