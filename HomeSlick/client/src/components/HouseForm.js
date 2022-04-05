import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const HouseForm = (props) => {
    const [houses, setHouses] = useState([]);
    const [houseName, setHouseName] = useState("");
    const [askingPrice, setAskingPrice] = useState(0);
    const [beds, setBeds] = useState(0);
    const [baths, setBaths] = useState(0);
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/houses/new', {
            houseName,    // this is shortcut syntax for houseName: houseName,
            askingPrice,
            beds,
            baths,
            location,
            description,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                setHouses([...houses, res.data]);
                setHouseName("");
                setAskingPrice(0);
                setBeds(0);
                setBaths(0);
                setLocation("");
                setDescription("");

                navigate("/")


            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }


    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Explore</p>
                </Link>
            </div>
            <h1 className="h1-text">List Your Home</h1>
            <br/>
        <form onSubmit={onSubmitHandler}>
            {/* NAME */}
            <div className= "form-input-div">
                <label>House Name:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input
                    onChange = {(e)=> setHouseName(e.target.value)}
                    value={houseName}
                    name="houseName"
                    type="text"
                />
            </div>
            { errors.houseName ? 
                    <p className="error-text" >{errors.houseName.message}</p>
                    : null
                }
            <br/>


            {/* ASKING PRICE */}
            <div className= "form-input-div">
                <label>Asking Price*:</label><br/>
                <input
                    onChange = {(e)=> setAskingPrice(e.target.value)}
                    value={askingPrice}
                    name="askingPrice"
                    type="number"
                />
            </div>
            { errors.askingPrice ? 
                    <p className="error-text" >{errors.askingPrice.message}</p>
                    : null
                }
            <br/>


            {/* BEDS */}
            <div className= "form-input-div">
                <label>Number of Beds:</label><br/>
                <input
                    onChange = {(e)=> setBeds(e.target.value)}
                    value={beds}
                    name="beds"
                    type="number"
                />
            </div>
            { errors.beds ? 
                    <p className="error-text" >{errors.beds.message}</p>
                    : null
                }
            <br/>


            {/* BATHS */}
            <div className= "form-input-div">
                <label>Number of Baths:</label><br/>
                <input
                    onChange = {(e)=> setBaths(e.target.value)}
                    value={baths}
                    name="baths"
                    type="number"
                />
            </div>
            { errors.baths ? 
                    <p className="error-text" >{errors.baths.message}</p>
                    : null
                }
            <br/>


            {/* LOCATION */}
            <div className= "form-input-div">
                <label>Location:</label><br/>
                <input
                    onChange = {(e)=> setLocation(e.target.value)}
                    value={location}
                    name="location"
                    type="text"
                />
            </div>
            { errors.location ? 
                    <p className="error-text" >{errors.location.message}</p>
                    : null
                }
            <br/>


            {/* DESCRIPTION */}
            <div className= "form-descripton-div">
                <label>Description:</label><br/>
                {/* <input className="description-input"
                    onChange = {(e)=> setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                /> */}
                <textarea className="description-input"
                onChange = {(e)=> setDescription(e.target.value)}
                name="description" 
                cols="20" 
                rows="4">
                        {description}
                </textarea>
            </div>
            { errors.description ? 
                    <p className="error-text" >{errors.description.message}</p>
                    : null
                }
            <p className="form-star-text">*In USD, do NOT include $ or ,</p>
            <br/>

            <br/>
            <input className="house-add-btn" type="submit" value="Post Listing" />
            
        </form>
        </div>
    );
};
export default HouseForm;
