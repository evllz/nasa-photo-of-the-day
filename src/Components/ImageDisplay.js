import React from 'react'

export default function ImageDisplay(props) {
    return (
        <div>
            <img className='main-img' src={props.url}/>
        </div>
    )
}
