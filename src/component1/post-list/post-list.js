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
                    //label={item.label} //можно было написать вместо {...item} типи тоже самое только старый код
                    //prefer={item.prefer}
                    //onDelete={() => {console.log('Deleted')}} // добавляем пропс, а в ней функция, обязательно в скобках фигурных. это прописано в пропсах. в другом блоке мы вытаскиваем их из пропса, и вставлеям куда нужно
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