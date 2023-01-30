import React from 'react';
import atmosphere from './background/atmosphere.jpg';
import clear from './background/clear.jpg';
import clouds from './background/clouds.jpg';
import drizzle from './background/drizzle.jpg';
import rain from './background/rain.jpg';
import snow from './background/snow.jpg';
import thunderstorm from './background/thunderstorm.jpg';


const Mosam =(props)=>{
    if(props.background==="atmosphere"){
        document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+atmosphere+')'
    } 
    if(props.background==="clear"){
        document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+clear+')'
    } 
    if(props.background==="clouds"){
        document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+clouds+')'
    }
    if(props.background==="drizzle") {
            document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+drizzle+')'
    } 
    if(props.background==="rain") {
                document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+rain+')'
    }
    if(props.background==="snow"){
                    document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+snow+')'
    }
    if(props.background==="thunderstorm"){ 
                        document.getElementById('Body').style.backgroundImage= 'linear-gradient(to  bottom , rgba(0, 0, 0, 0.4),rgba(0,0,0,0.75)),url('+thunderstorm+')'
                      }
    
        return(
       
        <div className="container text-light">
            <div className="cards pt-4">
                <h1 >
                    <span className="loc">{props.city}</span> 
                </h1>
                <h5 >
                    <i className={`wi ${props.icon} display-2`}/>
                </h5>
                <span > {props.temp_celsius?(<h1 className="currTemp">{props.temp_celsius}&deg;c</h1>):null}</span>
                <h4 className="desc">{props.desc}</h4>
                {minmaxTemp(props.temp_min,props.temp_max)}   
               
            </div>
        </div>
    );
};
function minmaxTemp(min,max){
    if(min&&max)
    {
       return(
         <div>
        <h6><span className="px-2">min</span>
        <span className="px-4">max</span></h6>   
        <h3>
            <span className="px-4">{min}&deg;c</span>
            <span className="px-4">{max}&deg;c</span>
        </h3> 
        </div>     
    );
}
}   
export default Mosam;