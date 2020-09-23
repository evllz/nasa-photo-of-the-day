import React,{useEffect,useState} from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ImageDisplay from "./Components/ImageDisplay";
import VideoDisplay from "./Components/VideoDisplay"
import Info from "./Components/Info";
import moment from 'moment';

function App() {
  const [data,setData] = useState([]);
  const [selectedDate,setSelectedDate] = useState(null)
  console.log(selectedDate)


  useEffect(()=>{
    if(selectedDate === null){
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=HUlc5Ju0yWI2VrtJ261IQeCkpluNUJkhctHxERfB&date=2020-06-19`)
      .then( response => {setData(response.data)})
    }
    else{
      const fixedDate = selectedDate.toISOString().slice(0, 10);
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=HUlc5Ju0yWI2VrtJ261IQeCkpluNUJkhctHxERfB&date=${fixedDate}`)
      .then( response => {setData(response.data)})
    }
  },[selectedDate])
  console.log('Stored data',data)



  return (
    
    <div className="App">
    <h1 className='main-title'>Welcome to the AOPD!</h1>
      <div>
        <span>Select Date: </span>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
      </div>

      {data.media_type === 'image' ? <ImageDisplay url={data.url}/>:<VideoDisplay url={data.url}/>}
       
      <Info title={data.title} explanation={data.explanation} copyright={data.copyright}/>

    </div>
  );
}

export default App;
