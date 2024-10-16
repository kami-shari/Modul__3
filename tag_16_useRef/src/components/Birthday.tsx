import React, { useRef } from "react";

const ItsMyBirthday = () => {
    const nameInput = useRef<HTMLInputElement>(null)
    const birthdayInput = useRef<HTMLInputElement>(null)

    const checkBirthday = () => {
        const today = new Date()
        const typedDate = birthdayInput.current?.value 

        if (typedDate) {
            const typedBirthday = new Date(typedDate)
            if (
                typedBirthday.getDate() === today.getDate() &&
                typedBirthday.getMonth() === today.getMonth() 
            ) {
                alert(`heute ist dein bday, ${nameInput.current?.value}!`)
            } else {
                alert(`heute ist nicht dein bday, ${nameInput.current?.value}`)
            }
        }
    }

    return (
        <div>
            <h1>check dein bday</h1>
            <form>
        <label>Vorname: </label>
        <input type="text" ref={nameInput} />
        <br />
        <label>Geburtstag: </label>
        <input type="date" ref={birthdayInput} />
        <br />
        <button type="button" onClick={checkBirthday}>Überprüfen</button>
      </form>
        </div>
    )
}
export default ItsMyBirthday