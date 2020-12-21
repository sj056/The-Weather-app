import React from"react";

import"./App.css";

import"weather-icons/css/weather-icons.css";
import"bootstrap/dist/css/bootstrap.min.css";
import Mosam from"./app_component/mosam.component";
import Form from"./app_component/form.component";
require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;
class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      desc:"",
      error:false,
      background:""   
     };
     
    this.icon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
    
  }
  
  calcelsius(temp)
  {
    let cel=Math.floor(temp-273.15)
    return cel;
  }

  get_weathericon(icon,rangeid){
    switch(true){
      case rangeid>=200&&rangeid<=232:
        this.setState({icon:this.icon.Thunderstorm , background:"thunderstorm" });
        break;
      case rangeid>=300&&rangeid<=321:
        this.setState({icon:this.icon.Drizzle , background:"drizzle"});
       break;
      case rangeid>=500&&rangeid<=531:
        this.setState({icon:this.icon.Rain , background:"rain"});
        break;
      case rangeid>=600&&rangeid<=622:
        this.setState({icon:this.icon.Snow , background:"snow"});
        break;        
      case rangeid>=701&&rangeid<=781:
        this.setState({icon:this.icon.Atmosphere , background:"atmosphere"});
        break;    
      case rangeid===800:
        this.setState({icon:this.icon.Clear , background:"clear"});
        break;
      case rangeid>=801&&rangeid<=804:
        this.setState({icon:this.icon.Clouds , background:"clouds"});
        break;
      default:
        this.setState({icon:this.icon.Clouds , background:"clouds"});

    }
  }
  getweather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city&&country)
    {
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response=await api_call.json();
    this.setState({
    city:`${response.name},${response.sys.country}`,
    celsius:this.calcelsius(response.main.temp),
    temp_max:this.calcelsius(response.main.temp_max),
    temp_min:this.calcelsius(response.main.temp_min),
    desc:response.weather[0].description,
    
    });  
    this.get_weathericon(this.icon,response.weather[0].id)
  }
  else{
    this.setState({error:true});
  }
};

 
   dateBuilder(d){
  let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let date=d.getDate();
  let month=months[d.getMonth()];
  let year=d.getFullYear();
  return `${date} ${month} ${year}`
}
render()
 {  
  
    return(
    <div className="App">
     <Form loadmosam={this.getweather} error={this.state.error} date={this.dateBuilder(new Date())}/>
    
     <Mosam city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius} temp_max={this.state.temp_max} temp_min={this.state.temp_min} desc={this.state.desc}
     icon={this.state.icon} background={this.state.background}/>
     </div> 
    );
  }
}


export default App;
