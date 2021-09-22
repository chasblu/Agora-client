import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Addpost = ({ match, x, y }) => {

    const [loaded, setloaded] = useState(false)
    const history = useHistory()
        
    const getPostData = async () => {
        const API_ENDPOINT = `https://evening-wildwood-84454.herokuapp.com/forums/${match.params.id}`;
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            y(data);
            setloaded(true)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPostData();
    }, [])
    
    const initialFormState = {
        title: "",
        body: "",
        forumId: `${match.params.id}`
    }
    
    const [postValues, setPostValues] = useState(initialFormState)

    const _handleChangePost = (e) => {
        setPostValues(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }


    const _handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            const API_ENDPOINT = `https://evening-wildwood-84454.herokuapp.com/posts`;
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(postValues),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                getPostData();
                setPostValues(initialFormState)
            } else {
                alert('Post not logged.');
            }
        } catch (err) {
            console.log(err);
        }
    }
    const _handleDelete = async (postID) => {
        const API_ENDPOINT = `https://evening-wildwood-84454.herokuapp.com/posts/${postID}`;
        if (window.confirm('You sure you to deleted this post?')) {
            try {
                const deletedPost = await fetch(API_ENDPOINT, { method: 'DELETE' });
                if (deletedPost.status === 204) {
                    getPostData();
                    history.goBack('/')
                } else {
                    alert('One moment please while, we fix this issue.');
                }
            } catch (err) {
                console.log(err)
            }
        }
        return;
    }
    const [likes, setLikes] = useState(0);
    const handleIncrement = () => {
        setLikes(likes + 1);
    }
    const [likes1, setLikes1] = useState(0);
    const handleIncrement1 = () => {
        setLikes1(likes1 + 1);
    }
    const [likes2, setLikes2] = useState(0);
    const handleIncrement2 = () => {
        setLikes2(likes2 + 1);
    }
    const [likes3, setLikes3] = useState(0);
    const handleIncrement3 = () => {
        setLikes3(likes3 + 1);
    }
    const [likes4, setLikes4] = useState(0);
    const handleIncrement4 = () => {
        setLikes4(likes4 + 1);
    }

    if (loaded === false) {
        return (<h1>Loading...</h1>)
   }

    return (
        <div>
            <div className="addPost">
                <form onSubmit={_handleCreatePost}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="title"
                            value={postValues.title}
                            onChange={_handleChangePost}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='body'></label>
                        <textarea
                            type='text'
                            id='body'
                            // className="title"
                            placeholder="Type your body here"
                            value={postValues.body}
                            onChange={_handleChangePost}
                            required
                        />
                    </div>
                    <input type='submit' className="postBtn" value='Create post' />
                </form>
            </div>
            <div >
                {x.posts.map((post, i) => {
                    return (
                        <div key={i}>
                            <div className="eachPost">
                                
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>

                                <button onClick={handleIncrement}>&#x1F5A4;{likes}</button>
                                <button onClick={handleIncrement1}>&#x1F98B;{likes1}</button>
                                <button onClick={handleIncrement2}>&#x1F432;{likes2}</button>
                                <button onClick={handleIncrement3}>&#x1F31E; {likes3}</button>
                                <button onClick={handleIncrement4}>&#x26BD;{likes4}</button>
                                        <small>{new Date(post.createdAt).toLocaleString()}</small>
                                        <button onClick={() => _handleDelete(post._id)} className="delete">Delete</button>
                                       < Link to={`/posts/${post._id}/edit`}>
                                             <button className='edit' >Edit</button>
    	                                </Link>
                                
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    );
};

export default Addpost;