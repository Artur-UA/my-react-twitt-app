import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFiler from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';

import './app.css';
import './index.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list-item/post-list-item.css';
import '../post-list/post-list.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
` 



export default class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data : [//имитация данных с сервера
                {label : 'You need', prefer : true, like : false, id: 1},
                {label : 'to learn', prefer : false, like : false, id: 2},
                {label : 'React', prefer : false, like : false, id: 3}
            ],
            search: '',
            filter: 'all' 
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onTogglePrefer = this.onTogglePrefer.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onClickFilter = this.onClickFilter.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => { 
            const index = data.findIndex(elem => elem.id === id); 
            
            const before = data.slice(0, index); 
            const after = data.slice(index + 1); 
            
            const newArr = [...before, ...after]; 
            console.log(id);
            return{
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            prefer: false,
            id : this.maxId++
        }
        this.setState (({data}) => {
            const newArr = [...data, newItem];
        
            return {
                data: newArr
            }
        });
    }

    onTogglePrefer(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); 

            const old = data[index]; 

            const newItem = {...old, prefer: !old.prefer}; 
             
            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        
            return{
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); 

            const old = data[index]; 

            const newItem = {...old, like: !old.like}; 
             
            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        
            return{
                data: newArr
            }
        })
    }

    onSearchPost(items, search) { 
        if (search.length === 0) { 
            return items
        }

        return items.filter( (item) => {  
            return item.label.indexOf(search) > -1
        })
    }

    onUpdateSearch(search) {
        this.setState({search})
    }

    onFilterPost(items, filter) {
        if (filter === 'like') { 
            return items.filter( item => item.like)  
        } else {
            return items
        }
    }

    onClickFilter(filter) { 
        this.setState({filter})
    }

    render(){ 
        const {data, search, filter} = this.state;
        
        const liked = data.filter(item => item.like).length; 
        const allPost = data.length; 
        
        const visiblePosts = this.onFilterPost(this.onSearchPost(data, search), filter);  

        return (
        <AppBlock>
            <AppHeader
                liked = {liked} 
                allPost = {allPost}
            />
            <div className= "search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                />
                <PostStatusFiler
                    filter = {filter} 
                    onClickFilter={this.onClickFilter}
                />
            </div>
            <PostList 
                
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onTogglePrefer={this.onTogglePrefer}//
                onToggleLike={this.onToggleLike}
            /> 
            <PostAddForm
                onAdd={this.addItem}
            />
        </AppBlock>
    )
    }
}
