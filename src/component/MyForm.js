
import React, { useState } from "react";
import validator from 'validator'
export default function MyForm() {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    const [contactError, setContactError] = useState('');
    const validatePhone = (e) => {
        var phone = e.target.value
        if(validator.isMobilePhone(phone)){
            setContactError('');
        }
        else
        {
            setContactError('Enter 10 Digit contact number')
        }


    }

    const [errorMessage, setErrorMessage] = useState('')
    const validatePassword = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Strong Password')
        } else {
            setErrorMessage('Not a strong Password')
        }
    }
    return (
        <div className="container">
            <form>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstname" />
                    </label>
                </div>
                <div className="arun">
                    <label>
                        Last Name:
                        <input type="text" name="lastname" />
                    </label>
                </div>
                <div className="arun">
                    <label>
                        Email ID:
                        <input type="text" name="email" onChange={(e) => validateEmail(e)} />
                        <span style={{
                            fontWeight: 'bold',
                        }}>{emailError}</span>
                    </label>
                </div>
                <div className="arun">
                    <label>
                        DOB :
                        <input type="date" name="dateofbirth" />
                    </label>
                </div>
                <div className="arun">
                    <label for="gender">Gender:</label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>

                </div>
                <div className="arun">
                    <label>
                        Phone No. :
                        <input type="text" name="contactno" onChange={(e) => validatePhone(e)} />
                        <span style={{
                            fontWeight: 'bold',
                        }}>{contactError}</span>
                    </label>
                </div>
                <div className="arun">

                    <label>
                        Password :
                        <input type="password" name="password" onChange={(e) => validatePassword(e.target.value)} />
                        <span style={{
                            fontWeight: 'bold',
                        }}>{errorMessage}</span>
                    </label>
                </div>
                <input type="submit" value="Submit"  className="button"/>
            </form >
        </div >
    )
}
