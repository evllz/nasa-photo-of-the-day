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
  useEffect(()=>{
    if(selectedDate === null){
      const defaultDate = moment().format('YYYY-MM-DD');
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=HUlc5Ju0yWI2VrtJ261IQeCkpluNUJkhctHxERfB&date=${defaultDate}`)
      .then( response => {setData(response.data)})
    }
    else{
      const fixedDate = selectedDate.toISOString().slice(0, 10);
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=HUlc5Ju0yWI2VrtJ261IQeCkpluNUJkhctHxERfB&date=${fixedDate}`)
      .then( response => {setData(response.data)})
    }
  },[selectedDate])

  return (
    
    <div className="App">
      <h1 className='App-header'>Welcome to the AOPD!</h1>
      <div>
        <span>Select Date: </span>
        <div className='calendar' >
          <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        {data.media_type === 'image' ? <ImageDisplay url={data.url}/>:<VideoDisplay url={data.url}/>}
      </div>
      <div>
        
      </div>     
      <Info date={data.date} title={data.title} explanation={data.explanation} copyright={data.copyright}/>
      <h1 className='App-header'></h1>
    </div>
    
  );
}

export default App;
