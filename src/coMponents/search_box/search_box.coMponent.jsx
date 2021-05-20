import React from 'react';
import './search.style.css'

export const SearchBox = ({placeholder, handler}) => (
    <input type="search" className="search" placeholder={placeholder} onChange={handler}/>
)