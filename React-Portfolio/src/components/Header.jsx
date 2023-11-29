import "../assets/styles/Header.css";

function Header({ onClickComponentChange }) {
    return (
        <header className="header">
            <h1 id="lernantino">Jushen Dhillon</h1>
            <div className="navbar">
                <ul>
                    <li onClick={onClickComponentChange}>About Me</li>
                    <li onClick={onClickComponentChange}>Portfolio</li>
                    <li onClick={onClickComponentChange}>Contact Me</li>
                    <li onClick={onClickComponentChange}>Resume</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
