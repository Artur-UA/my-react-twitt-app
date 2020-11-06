import React, {Component} from 'react';

export default class PostAddForm extends Component {
    state = {
        text : ""
    };
    
    onChange = (event) => {//из нативного js если мы хотим следить за элементом, и хотим образаться с обытием которое происходит на этом элементе то нам необходим event | event.target это обращение к тому элементу на котором было вызвано событие 
        this.setState({
            text : event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault(); //чтобы не отправляло формы
        this.props.onAdd(this.state.text) //запустит onAdd from apps.js эта обработчик который запустит функцию addItem которая в свою очередь обнавляет state b создает новый элемент на странице. инфу она берет из text, то что мы вытаскиваем из onChange  
        this.setState({ //чтобы при следующей операции было пусто
            text : ''
        })
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit} //стандартный обработчик    Вешается на форму, а не на баттон
                >
                <input 
                    type='text'
                    placeholder='О чем думаете?'
                    className="form-control new-post-label"
                    onChange={this.onChange}  //стандартный обработчик события. реагирует на изменения 
                    value={this.state.text} // при рендеринге она сотрет старое написаное значение, и запишет то, которое у нас указано в state(функция onSubmit), тоесть пустое значение ||| контролируемый элемент 
                />
                <button
                type='submit'
                className='btn btn-outline-secondary'
                >
                Добавить
                </button>
            </form>
        )
    } 
}
