import React from 'react';
import './card.style.css';
export const Card = props => (
    <div key={props.monster.id} className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        {props.monster.name}
        </div>
)