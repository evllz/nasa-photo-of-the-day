import React from 'react';
import ReactPlayer from 'react-player'
import './Media.css'


export default function VideoDisplay(props){
  return (
    <div className='media-container'>
      <div className='right'></div>
      <div className='center-video'>
        <ReactPlayer controls='true' url={props.url}/> 
      </div>
      <div className='left'></div>
    </div> 
  );
};