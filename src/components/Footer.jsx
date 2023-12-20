import "../assets/styles/Footer.css"

function Footer () {
    return (
        <div id = "footerIconContainer">
            <div>
                <a target = "blank" href = "https://github.com/jushendhillon9">
                    <img src = "/github_icon.png" className = "footerImage"></img>
                </a>
            </div>
            <div>
                <a target = "blank" href = "https://www.linkedin.com/in/jushendhillon/">
                    <img src = "/linkedin_icon.png" className = "footerImage"></img>
                </a>
            </div>
            <div>
                <a target = "blank" href = "https://dev.to/jushendhillon9">
                    <img src = "/devToLogo.svg" className = "footerImage"></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;
