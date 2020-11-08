import React, {Component} from 'react';

export default class  PostStatusFiler extends Component {
    buttons = [ 
        { name : "all", label : "Все" }, 
        { name : "like", label : "Понравилось"}
    ]

    render () {
        const buttons = this.buttons.map(({name, label}) => { 
            const active = this.props.filter === name; 
            const classes = active ? 'btn-info' : 'btn-outline-secondary' 
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${classes}`}
                    onClick={() => this.props.onClickFilter(name)} 
                    >
                        {label}
            </button>   
            )
        });
        return (
            <div className="btn-group">
                {buttons} 
            </div>
            
        )
    }
}

