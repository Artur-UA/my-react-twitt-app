import React, {Component} from 'react';

export default class SearchPanel extends Component{ 
    state = {
        search : ''
    }

    onUpdateSearch = (event) => { //из нативного js если мы хотим следить за элементом, и хотим образаться с обытием которое происходит на этом элементе то нам необходим event | event.target это обращение к тому элементу на котором было вызвано событие 
        const search = event.target.value; //записываем в переменную, что напишет пользователь 
        this.setState({search}) //потом в state search вставляю переменную searchs;
        this.props.onUpdateSearch(search); //функция прописана в apps.js
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}//стандартный обработчик события. реагирует на изменения 
            />
        )
    }
}