import React from 'react'

export default function Info(props) {
    return (
        <div>
            <div className='title'>{props.title}</div>
            <div className='copyright'>{props.copyright}</div>
            <div className='date'>{props.date}</div>
            <div className='description'>{props.explanation}</div>
        </div>
    )
}
