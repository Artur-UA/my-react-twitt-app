import React from 'react';

import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({posts, onDelete, onTogglePrefer, onToggleLike}) => {

    const elements = posts.map((item) => {
        const {id, ...elementsDetail} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...elementsDetail}
                    
                    onDelete = {() => onDelete(id)}    
                    onTogglePrefer = {() => onTogglePrefer(id)}
                    onToggleLike = {()=> onToggleLike(id)}
                />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;