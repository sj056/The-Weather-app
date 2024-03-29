import React from'react';
import"./form.style.css";
const Form= (props)=>{
    return(
        <div className="container">
            <div className="display-4 text-light" id="title">The Weather App</div>
            <h3 className='today'>Today</h3>
            <div className="date"><h5>{props.date}</h5></div>
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadmosam}>
            <div className="row">
                <div className="col-md-4 ">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city"/>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"/>
                </div>
                <div className="col-md-4">
                   <button className="submitBtn btn btn-light">Get Weather</button> 
                </div>
            </div>
            </form>

        </div>
    );
};
function error()
{
    return(
     <div className="alert alert-danger mx-5" role="alert">
         Please enter valid city and country!
     </div>
    );
}
export default Form;