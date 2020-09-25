import React from 'react'
import './Media.css'

export default function ImageDisplay(props) {
    return (
        <div className='media-container'>
            <div className='right'></div>
            <div className='center'>
                <img className='main-img' src={props.url}/> 
            </div>
            <div className='left'></div>
        </div>
    )
}
