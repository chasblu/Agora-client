import { useState } from 'react';
import {Redirect, useHistory} from 'react-router'


const Login = ({setLogIn}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || [])

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
    const _logIn = async (e) => {
        e.preventDefault();
        try {
            const API_ENDPOINT = 'https://evening-wildwood-84454.herokuapp.com/user/login';

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(userValues),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json()
            if (response.status === 200) {
                sessionStorage.setItem('user', JSON.stringify(data))
                sessionStorage.setItem('loggedIn', true)
                setUserValues(initialFormState)
                sessionStorage.setItem("loggedIn", true)
                setLogIn(true)
                history.goBack('/')
            }
        } catch (err) {
            console.log(err);
        };
        return <Redirect to='/' />
    };

    return (
        <div className="signUp">
            <h1 className="sut">LOG IN</h1>
            <form onSubmit={_logIn}>
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
                <input type='submit' className="signupBtn" value='Log in' />
            </form>
        </div>
    );
};

export default Login;