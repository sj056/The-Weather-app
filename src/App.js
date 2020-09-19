import React from"react";

import"./App.css";

import"weather-icons/css/weather-icons.css";
import"bootstrap/dist/css/bootstrap.min.css";
import Mosam from"./app_component/mosam.component";
import Form from"./app_component/form.component";
const API_key="cbcdd0541b10be68e1b95edca9109ef0";

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
      error:false
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

  get_weathericon(icons,rangeid){
    switch(true){
      case rangeid>=200&&rangeid<=232:
        this.setState({icon:this.icon.Thunderstorm});
       
        break;
      case rangeid>=300&&rangeid<=321:
        this.setState({icon:this.icon.Drizzle});
        break;
      case rangeid>=500&&rangeid<=531:
        this.setState({icon:this.icon.Rain});
        break;
      case rangeid>=600&&rangeid<=622:
        this.setState({icon:this.icon.Snow});
        break;        
      case rangeid>=701&&rangeid<=781:
        this.setState({icon:this.icon.Atmosphere});
        break;    
      case rangeid===800:
        this.setState({icon:this.icon.Clear});
        break;
      case rangeid>=801&&rangeid<=804:
        this.setState({icon:this.icon.Clouds});
        break;
      default:
        this.setState({icon:this.icon.Clouds});            
    }
  }
  getweather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city&&country)
    {
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

    const response=await api_call.json();
    console.log(response);
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

  render(){
    return(
    <div className="App">
     <Form loadmosam={this.getweather} error={this.state.error}/>
     <Mosam city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius} temp_max={this.state.temp_max} temp_min={this.state.temp_min} desc={this.state.desc}
     icon={this.state.icon}/>
    </div>
    );
  }
}


export default App;
