import { useState } from "react";
import "../assets/styles/ContactMe.css"

function ContactMe () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const emailRegex = /^\S+@\S+\.\S+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setError("Please fill out all fields!")
            if (!emailRegex.test(email)) {
                setError("That is not a valid email!");
                return;
            }
        }

        setName("");
        setEmail("");
        setMessage("");
        setError("");
    }




    return (
        <div id = "contactMeContainer">
            <form id = "formContainer">
                <div id = "contactHeader">Contact</div>
                <div id = "nameContainer">
                    <label className = "label">Name</label>
                    <div className = "linebreak"></div>
                    <input id = "nameInput" onChange = {(e) => setName(e.target.value)}></input>
                </div>
                <div id = "emailContainer">
                    <label className = "label">Email Address:</label>
                    <div className = "linebreak"></div>
                    <input id = "emailInput" onChange = {(e) => setEmail(e.target.value)}></input>
                </div>
                <div id = "messageContainer">
                    <label className = "label">Message:</label>
                    <div className = "linebreak"></div>
                    <textarea id = "messageInput" onChange = {(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button id = "submitButton" onClick = {handleSubmit}>Submit</button>
                {error && <div className = "error">{error}</div>} 
            </form>
        </div>
    )
}

//line 51 checks if there is an error, if there is it renders teh div holding the error message...

export default ContactMe;