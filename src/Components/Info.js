import React from 'react'

export default function Info(props) {
    return (
        <div>
            <div className='title'>{props.title}</div>
            <div className='date'>Date: {props.date}</div>
            <div className='copyright'>Author: {props.copyright}</div>
            <div className='description'>Description: {props.explanation}</div>
        </div>
    )
}
