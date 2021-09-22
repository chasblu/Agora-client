import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Addforum = ({getForumData}) => {
    const initialFormValues = {
        topic: '',
        description: '',
    }
    const history = useHistory()
    const [values, setValues] = useState(initialFormValues)

    const _handleChange = (e) => {
        setValues(prevState => {
            return {
                ...prevState, [e.target.id]: e.target.value
            };
        });
    };

    const _addNewForum = async (e) => {
        e.preventDefault();
        try {
            const API_ENDPOINT = 'http://localhost:8000/forums';

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setValues(initialFormValues)
                getForumData()
                history.push('/')
            }
        } catch (err) {

            console.log(err);
        };
    };


    return (
        <form onSubmit={_addNewForum} className="form">
            <div >
                <label htmlFor="topic">Topic:</label>
                <input
                    type="text"
                    id='topic'
                    className="input"
                    required
                    value={values.topic}
                    onChange={_handleChange} />
            </div>
            <div >
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    className="input"
                    id='description'
                    required
                    value={values.description}
                    onChange={_handleChange} />
            </div>
            <div>
                <input type="submit" className="btn" value="Add Forum" />
            </div>

        </form>
    );
};

export default Addforum;
