import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import { AiFillCaretLeft, AiFillFilter } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/post/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            <div className='flex items-center text-center mb-3 text-2xl bg-primary-card p-5 sticky'>
                <Link to='/' className='flex flex-1'>
                    <AiFillCaretLeft className='flex-auto'/>
                </Link>
                <span className='flex-auto text-3xl'>Feed</span>
                <Link to='' className='flex flex-1'>
                    <AiFillFilter className='flex-auto'/>
                </Link>
            </div>
            {posts.map((post) => {
                return (
                    <Post title={post[1]} desc={post[2]}/>
                );
            })}
        </div>
    );
}

export default Feed