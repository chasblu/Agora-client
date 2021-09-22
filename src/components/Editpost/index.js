import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Editpost({ match, getForumData }) {
    
    const history = useHistory();

    const API_ENDPOINT = `https://evening-wildwood-84454.herokuapp.com/posts/${match.params.id}`;
    const [values, setValues] = useState({
        title: '',
        body: '',
        forumId: `${match.params.id}`
    })

    const _handleChangeEdit = (e) => {
        setValues((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    const getPost = async () => {
        try {
            const newForum = await fetch(API_ENDPOINT);
            const data = await newForum.json();
            setValues({title:data.title , body:data.body})
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const _updatePost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'PATCH',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                getForumData();
                history.goBack();
            } 
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={_updatePost} className="editForm">
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    className="title"
                    value={values.title}
                    onChange={_handleChangeEdit}
                    required
                />
            </div>
            <div>
                <label htmlFor='body'></label>
                <textarea
                    type='text'
                    id='body'
                    value={values.body}
                    onChange={_handleChangeEdit}
                    required
                />
            </div>
            <input type='submit' className="postBtn" value='Update my post' />
        </form>
    )
}