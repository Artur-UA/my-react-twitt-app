import React, {Component} from 'react';

export default class SearchPanel extends Component{ 
    state = {
        search : ''
    }

    onUpdateSearch = (event) => { 
        const search = event.target.value;  
        this.setState({search}) 
        this.props.onUpdateSearch(search); 
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}