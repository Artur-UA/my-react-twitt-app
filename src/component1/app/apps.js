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
`//будет создан компонент AppBlock(div) с этими css  



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
            filter: 'all' //будет стоять по умолчанию что показывать нужно все, а не любимые 
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
        this.setState(({data}) => { //d скобках state, но мы из него сразу вытащили date 
            const index = data.findIndex(elem => elem.id === id); //ищем индекс elem перебирает все элементы(каждую строку), и если их id будет совпадать с id на котом была нажата кнопка, он их удалит 
            
            const before = data.slice(0, index); //чтобы удалить, мы нашли строкой выше индекс на который клацнули. теперь мы решем массив данных data от 0 до саммого индекса на который клацнули, не включая его
            const after = data.slice(index + 1); //режем от следующего индекса после нажатого до конца массива[];
            
            const newArr = [...before, ...after]; //склеиваем все вместе без того элемента, на который был нажат
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
            const index = data.findIndex(elem => elem.id === id); //ищем индекс elem перебирает все элементы(каждую строку), и если их id будет совпадать с id на котом была нажата кнопка, в константу запишет индекс этого поста

            const old = data[index]; // по индексу получаем элемент массива 

            const newItem = {...old, prefer: !old.prefer}; // помещаем туда копию лайкнутого объекта(целиком), если поставить запятую после ... и записать какое то свойство из этого объекта, я могу его перезаписать. в нашем сдучае я беру значение из старого объекта и ставлю противоположное(тру-фолс)
             
            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)];//формируем новый массив из объектов data, но уже с новыми измененными данными  | способ как в deleteItem, только я там делал две константы и потом их вставлял, то тут сразу тут внутри сделал все операции, и по средине вставил наш измененный(лайкнутый) объект
        
            return{
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); //ищем индекс elem перебирает все элементы(каждую строку), и если их id будет совпадать с id на котом была нажата кнопка, в константу запишет индекс этого поста

            const old = data[index]; // по индексу получаем элемент массива 

            const newItem = {...old, like: !old.like}; // помещаем туда копию лайкнутого объекта(целиком), если поставить запятую после ... и записать какое то свойство из этого объекта, я могу его перезаписать. в нашем сдучае я беру значение из старого объекта и ставлю противоположное(тру-фолс)
             
            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)];//формируем новый массив из объектов data, но уже с новыми измененными данными  | способ как в deleteItem, только я там делал две константы и потом их вставлял, то тут сразу тут внутри сделал все операции, и по средине вставил наш измененный(лайкнутый) объект
        
            return{
                data: newArr
            }
        })
    }

    onSearchPost(items, search) { //items данные в которых будем искать эти посты. search это то что пользовательль ищет
        if (search.length === 0) { //если ничего не ввел, то мы ничего не делаем тоже возвращаем items 
            return items
        }

        return items.filter( (item) => {  //первый return вернет в onSearchPost а второй потому что в фильтре нужно тоже return
            return item.label.indexOf(search) > -1// в каждом элементе(item), мы ищем label (тоесть текст сообщения) и внутри label ищем то, что ввел в поиск пользователь  | > -1 значит что найдем все, где есть совпадения
        })
    }

    onUpdateSearch(search) {
        this.setState({search})
    }

    onFilterPost(items, filter) {
        if (filter === 'like') { //like это название (name) объекта в классе PostStatusFiler
            return items.filter( item => item.like)  //item это каждый элемент, и если у него like = true, то тогда он и вернется
        } else {
            return items
        }
    }

    onClickFilter(filter) { //вернет только то, что подойдет тоесть если filter all то вернет все, а если клацнем и вверху пропишется like, то будет like
        this.setState({filter})
    }

    render(){ 
        const {data, search, filter} = this.state;
        
        const liked = data.filter(item => item.like).length; //проходим фильтром по всем объектам в date, иесли там внутри есть like : true, то мы их собираем в новый массив, а благодаря length просто узнаем их количество и передадим в переменную 
        const allPost = data.length; //узнаем количество всех постов
        /*      вместо верхних тре строк, можэно было написать две
        const liked = this.state.data.filter(item => item.like).length; //проходим фильтром по всем объектам в date, иесли там внутри есть like : true, то мы их собираем в новый массив, а благодаря length просто узнаем их количество и передадим в переменную 
        const allPost = this.state.data.length; //узнаем количество всех постов
*/
        const visiblePosts = this.onFilterPost(this.onSearchPost(data, search), filter);  //отображает то, что пройдет через два фильтра  а через запятую, то что введ пользователь и по чем сортируем

        return (
        <AppBlock>
            <AppHeader
                liked = {liked} //передаем эти компоненты в appHeader и там их используем
                allPost = {allPost}
            />
            <div className= "search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                />
                <PostStatusFiler
                    filter = {filter} //скажет о том, что взять из фильтра который ув условии класса, а там сейчас all, то есть будет вссегда поначалу показывать все записи 
                    onClickFilter={this.onClickFilter}
                />
            </div>
            <PostList 
                //posts={this.state.data}//posts это левое название а дата это инфа с сервера
                posts={visiblePosts}
                onDelete={this.deleteItem}//передача пропса как стрелочной функции
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
