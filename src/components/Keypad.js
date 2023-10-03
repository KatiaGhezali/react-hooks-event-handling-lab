// Code Keypad Component Here
import React from "react";

function Keypad () {
    function handlePassword() {
        console.log("Entering Password...")

    }
    return (
        
            <input type="password"   onChange={handlePassword} />

    )
}

export default Keypad;