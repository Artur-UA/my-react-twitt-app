import React from 'react';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display : flex;
    align-items: flex-end;
    justify-content: space-between; 
    h1 { 
        font-size: 26px;
        color: ${props => props.colored ? 'red ': 'green'};
        :hover {
            color: blue
        }
    }
    h2 {
        font-size: 1.2rem;
        color: green;
    }
`//стили которые мы подключим. :hover при наведении на h1 будет синим 
//еси на блок Header навешан атрибут colored, то цвет покрасится в красный, иначе зеленый \\ также можно использовать if или if else 


const AppHeader = ({liked, allPost}) => { //параметри идут из главного App.js/ сюдаприходят просто props, поэтому мы их деструктурируем 
    return (
        <Header colored> 
            <h1>Artur Kovalskyi</h1>
            <h2>{allPost} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;