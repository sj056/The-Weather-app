import React from 'react';

const Mosam =(props)=>{
        return(
        <div className="container text-light">
            <div className="cards pt-4">
                <h1 >
                    <span className="px-2">{props.city}</span> 
                </h1>
                <h5 >
                    <i className={`wi ${props.icon} display-2`}/>
                </h5>
                <span className="px-2"> {props.temp_celsius?(<h1>{props.temp_celsius}&deg;c</h1>):null}</span>
                {minmaxTemp(props.temp_min,props.temp_max)}   
                <h4 className="py-3">{props.desc}</h4>
               
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