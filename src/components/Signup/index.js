import React, { useState } from 'react';
import { useHistory } from 'react-router';


const Signup = () => {

    const history = useHistory()

    const initialFormState = {
        userName: "",
        email: "",
        password: ""
    }
    const [userValues, setUserValues] = useState(initialFormState)

    const _handleChange = (e) => {
        setUserValues(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }
    const _addNewUser = async (e) => {
        e.preventDefault();
        try {
            const API_ENDPOINT = 'https://evening-wildwood-84454.herokuapp.com/user/signup';

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(userValues),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setUserValues(initialFormState)
                alert('youve successfully signed up')
                history.goBack('/')
            }
        } catch (err) {

            console.log(err);
        };
    };

        return (
            <div className="signUp">
                <h1 className="sut" >SIGN UP</h1>
                <form onSubmit={_addNewUser}>
                        <div>
                            <label htmlFor="title"></label>
                            <input
                                type="text"
                                id="userName"
                                className="title su"
                                placeholder="user name*"
                                value={userValues.title}
                                onChange={_handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='body'></label>
                            <input
                                type='text'
                                id='email'
                                className="title su"
                                placeholder="email*"
                                value={userValues.body}
                                onChange={_handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='body'></label>
                            <input
                                type='password'
                                id='password'
                                className="title su"
                                placeholder="password*"
                                value={userValues.body}
                                onChange={_handleChange}
                                required
                            />
                        </div>
                        <input type='submit' className="signupBtn" value='Sign up' />
                    </form>
            </div>
        );
    };

export default Signup;