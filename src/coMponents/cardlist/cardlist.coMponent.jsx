import React from 'react';
import './cardlist_style.css';
import { Card } from '../card/card.coMponent'
export const CardList = (props) => {
    return(
        <div className="card-list">
            {
                props.monsters.map(monster => <Card monster={monster}/>)
            }
        </div>
    );
}