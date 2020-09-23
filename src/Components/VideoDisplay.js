import React from 'react';
import ReactPlayer from 'react-player'

export default function VideoDisplay(props){
  return (
    <ReactPlayer url={props.url}/>
  );
};