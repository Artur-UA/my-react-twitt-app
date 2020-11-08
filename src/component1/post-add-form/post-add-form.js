import React, {Component} from 'react';

export default class PostAddForm extends Component {
    state = {
        text : ""
    };
    
    onChange = (event) => {
        this.setState({
            text : event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault(); 
        this.props.onAdd(this.state.text) 
        this.setState({ 
            text : ''
        })
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit} 
                >
                <input 
                    type='text'
                    placeholder='О чем думаете?'
                    className="form-control new-post-label"
                    onChange={this.onChange}  
                    value={this.state.text}  
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
