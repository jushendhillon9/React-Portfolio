import "../assets/styles/ContactMe.css"

function ContactMe () {
    return (
        <div id = "contactMeContainer">
            <form id = "formContainer">
                <div id = "contactHeader">Contact</div>
                <div id = "nameContainer">
                    <label className = "label">Name</label>
                    <div className = "linebreak"></div>
                    <input id = "nameInput"></input>
                </div>
                <div id = "emailContainer">
                    <label className = "label">Email Address:</label>
                    <div className = "linebreak"></div>
                    <input id = "emailInput"></input>
                </div>
                <div id = "messageContainer">
                    <label className = "label">Message:</label>
                    <div className = "linebreak"></div>
                    <textarea id = "messageInput"></textarea>
                </div>
                <button id = "submitButton">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe;