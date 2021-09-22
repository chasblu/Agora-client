import React from 'react';
import Search from '../Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ forums }) => {


    const [search, setSearch] = useState("")
    const [filteredForum, setFilteredForum] = useState(forums)
    const [showFilter, setShowFilter] = useState(false);


    const handleChange = (e) => {
        setSearch(e.target.value)
        setFilteredForum(forums.filter(x => {
            setShowFilter(true);
            return x.topic.toLowerCase().includes(search.toLowerCase())
        }))


    }

    const handleSearch = (e) => {
        e.preventDefault();
        setShowFilter(true);
        setFilteredForum(forums.filter(x => {
            return x.topic.toLowerCase().includes(search.toLowerCase())
        }))
        setSearch("")
    }

    return (
        <div>
            <h1 className="homeTitle">AGORA</h1>
            <Search handleChange={handleChange} searchString={search} handleSearch={handleSearch} />
            <div >
                {!showFilter
                    ? forums.map((forum, i) => {
                        return (
                            <div className="TP" key={i}>

                                <Link to={`/forum/${forum._id}`}>
                                    <div className="topic">
                                        <h1>{forum.topic}</h1>
                                    </div>
                                    <div className="des">   
                                        <h3>{forum.description}</h3>
                                    </div>
                                    <small>{new Date(forum.createdAt).toLocaleString()}</small>
                                </Link>
                                <Link to={`/forum/${forum._id}`} >
                                </Link>

                            </div>
                        )
                    })

                    : filteredForum.map((forum, i) => {
                        return (
                            <div className="TP" key={i}>

                                <Link to={`/forum/${forum._id}`}>
                                    <div className="topic">
                                        <h2>{forum.topic}</h2>
                                    </div>
                                    <div className="des">
                                        <h2>{forum.description}</h2>
                                    </div>
                                    <small>{new Date(forum.createdAt).toLocaleString()}</small>
                                </Link>

                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default Home;