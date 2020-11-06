import React, {Component} from 'react';

export default class  PostStatusFiler extends Component {
    buttons = [ //массив данных сделан, чтобы его потом перебирать 
        { name : "all", label : "Все" }, //каждая кнопка, в виде объекта / label это то что написано на кнопке 
        { name : "like", label : "Понравилось"}
    ]

    render () {
        const buttons = this.buttons.map(({name, label}) => { //переменные вытащены для удобства. чтобы не писать buttons.label 
            const active = this.props.filter === name; // мы сравниваем тот пропс, который приходит из вызова, который в свою очередь приходит сверху из класса, с тем что мы написали вsit в переменной buttons, и если они сопадают то будет тру
            const classes = active ? 'btn-info' : 'btn-outline-secondary' //если active true то тогда мы добавил класс btn-indo, если нет, то secondary b кидаем их вниз 
            return (
                <button 
                    key={name} //key это уникальный ключ, и мы туда загнали значение name
                    type='button' 
                    className={`btn ${classes}`}//название класса будет btn и к нему добавится то, что придет из переменной classses. записываем через интерполяцию 
                    onClick={() => this.props.onClickFilter(name)} //при клике будет запускать стрелочную функцию, которая внутри запустит функцию onClickFilter которая в apps.js в качестве параметра она будет брать name? который у нас или all или like 
                    >
                        {label}
            </button>   //label это то, что мы напишем в переменной buttons 
            )
        });
        return (
            <div className="btn-group">
                {buttons} 
            </div>
            
            /* раньше было так, а теперь butons все сама отрисует как нужно 
            <div className="btn-group">
                <button type='button' className='btn btn-info'>Все</button>
                <button type='button' className='btn btn-outline-secondary'>Понравилось</button>
            </div>*/
        )
    }
}

