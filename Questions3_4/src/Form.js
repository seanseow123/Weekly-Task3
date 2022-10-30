import React, {useState} from "react";

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [contactErr, setContactErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const validateFirstName = (firstName) => {
        if (firstName.trim() === '') {
            setFirstNameErr("First name must not be empty");
            setFormIsValid(false);
        }
        else if (!/^[A-Za-z\s]*$/.test(firstName)) {
            setFirstNameErr("Only alpabets are allowed");
            setFormIsValid(false);
        }
        else {
            setFirstNameErr('');
            setFormIsValid(true);
        }
        return formIsValid;
    }

    const validateLastName = (lastName) => {
        if (lastName.trim() === '') {
            setLastNameErr("Last name must not be empty");
            setFormIsValid(false);
        }
        else if (!/^[A-Za-z\s]*$/.test(lastName)) {
            setLastNameErr("Only alpabets are allowed");
            setFormIsValid(false);
        }
        else {
            setLastNameErr('');
            setFormIsValid(true);
        }
        return formIsValid;
    }

    const validateContact = (contact) => {
        if (contact.trim() === '') {
            setContactErr("Contact number must not be empty");
            setFormIsValid(false);
        }
        else if (!/^[0-9]*$/.test(contact)) {
            setContactErr("Only numbers are allowed");
            setFormIsValid(false);
        }
        else {
            setContactErr('');
            setFormIsValid(true);
        }
        return formIsValid;
    }

    const validatePassword = (password) => {
        if (password.trim() === '') {
            setPasswordErr("Password must not be empty");
            setFormIsValid(false);
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
            setPasswordErr("Password must have at least 6-20 characters, at least one numeric digit, one uppercase letter and one lowercase letter");
            setFormIsValid(false);
        }
        else {
            setPasswordErr('');
            setFormIsValid(true);
        }
        return formIsValid;
    }

    const clearForm = () => {
        setFirstName('')
        setLastName('')
        setContact('')
        setPassword('')
        setFirstNameErr('')
        setLastNameErr('')
        setContactErr('')
        setPasswordErr('')
    }

    const handleChange = (hc) => {
        console.log(hc);
        console.log(hc.target.value);
        console.log(hc.target.id);

        if (hc.target.id == 'firstName') {
            validateFirstName(hc.target.value);
        }

        if (hc.target.id == 'lastName') {
            validateLastName(hc.target.value);
        }

        if (hc.target.id == 'contact') {
            validateContact(hc.target.value);
        }

        if (hc.target.id == 'password') {
            validatePassword(hc.target.value);
        }
    }

    const handleSubmit = (hs) => {
        hs.preventDefault();
        if (validateFirstName(firstName) && validateLastName(lastName) && validateContact(contact) && validatePassword(password)) {
            clearForm();
            alert('Form has been submitted');

        }
        else {
            alert('Please check that all fields are filled');
        }
    }


    return (
        <form>
            <h3><u>Question 4</u></h3><br></br>
            <label>First Name: </label>
            <input type="text" placeholder="Enter first name" id="firstName" onChange={handleChange}></input>
            <p style={{ color: 'red' }}>{firstNameErr}</p>
            <br></br>
            <label>Last Name: </label>
            <input type="text" placeholder="Enter last name" id="lastName" onChange={handleChange}></input>
            <p style={{ color: 'red' }}>{lastNameErr}</p>
            <br></br>
            <label>Contact: </label>
            <input type="text" placeholder="Enter contact" id="contact" onChange={handleChange}></input>
            <p style={{ color: 'red' }}>{contactErr}</p>
            <br></br>
            <label>Password: </label>
            <input type="password" placeholder="Enter password" id="password" onChange={handleChange}></input>
            <p style={{ color: 'red' }}>{passwordErr}</p>
            <br></br>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}

export default Form;