import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component { //класс чтобы менять состояние списков
   /* constructor(props) { //начало первого способа 
        super (props);
        this.state = {
            prefer: false
        };
        this.onPrefer = this.onPrefer.bind(this);
    }
    
    onPrefer() {
        this.setState(({prefer}) => {
            prefer = !prefer
        })
    }*/ ////конец  первого способа 
    /* state = {  //начало второго(треьего способа)
        prefer: false,
        like: false
    };
    onPrefer = () =>{
        this.setState(({prefer}) => ({
            prefer : !prefer
        }))
    }

    onLike = () =>{
        this.setState(({like}) => ({
            like : !like
        }))
    }*/ //конец второго(третьего) способа 

    render() {

        const {label, onDelete, onTogglePrefer, onToggleLike, prefer, like} = this.props;
        //const {prefer, like} = this.state;//вытягиваем уже не с props a co state  \ способ закоментин, в котором создавали state

        let classNames = "app-list-item d-flex justify-content-between"; //сделали переменную, чтобы если prefer(like) поставить, то жлбавит новый класс
        if (prefer){
            classNames += " important"//обезательно нужно пробел перед словом. Иначе склеятся названия классов и не будет работать 
        }

        if (like){
            classNames += " like"//обезательно нужно пробел перед словом. Иначе склеятся названия классов и не будет работать 
        }

        return(
            <div className={classNames}>
                <span className="app-list-item-label"
                onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type='button'
                        className='btn-star btn-sm'
                        onClick={onTogglePrefer}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type='button'
                        className='btn-trash btn-sm'
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div> 
        )
    }
}

