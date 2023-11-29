import "../assets/styles/Footer.css"

function Footer () {
    return (
        <div id = "footerIconContainer">
            <div>
                <img src = "/github_icon.png" className = "footerImage"></img>
            </div>
            <div>
                <img src = "/linkedin_icon.png" className = "footerImage"></img>
            </div>
            <div>
                <img src = "/devToLogo.svg" className = "footerImage"></img>
            </div>
        </div>
    )
}

export default Footer;