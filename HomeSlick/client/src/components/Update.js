import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";
import HouseForm from '../components/HouseForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = useParams();
    // const [errors, setErrors] = useState({});
    const [houseName, setHouseName] = useState("");
    const [askingPrice, setAskingPrice] = useState(0);
    const [beds, setBeds] = useState(0);
    const [baths, setBaths] = useState(0);
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const [house, setHouse] = useState("");
    const [loaded, setLoaded] = useState(false);

    const [errors, setErrors] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/houses/${id}`)
            .then(res => {
                console.log(res.data);
                setHouseName(res.data.houseName);
                setAskingPrice(res.data.askingPrice);
                setBeds(res.data.beds);
                setBaths(res.data.baths);
                setLocation(res.data.location);
                setDescription(res.data.description);

                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [id]);
    const updateSubmitHandler = (e) => {
        e.preventDefault();
        const putUpdateData = {
            houseName,
            askingPrice,
            beds,
            baths,
            location,
            description,
        };
        axios
            .put(`http://localhost:8000/api/houses/${id}`, putUpdateData)
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)
                
            })
            .catch(err => console.log(err))
    };
    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Explore</p>
                </Link>
            </div>
            <h1 className="h1-text">HomeSlick</h1>
            <br/>
            <h3>Edit {houseName}'s Listing:</h3>
            <div>
                <form onSubmit={updateSubmitHandler}>
                    {/* NAME */}
                    <div className= "form-input-div">
                        <label>House Name:</label>
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
                        <label>Description:</label>
                        {/* <input
                        onChange = {(e)=> setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                        /> */}
                        <textarea className="description-input"
                        onChange = {(e)=> setDescription(e.target.value)}
                        placeholder = {description}
                        name="description" 
                        cols="20" 
                        rows="4">
                        </textarea>
                    </div>
                    { errors.description ? 
                        <p className="error-text" >{errors.description.message}</p>
                        : null
                    }
                    <p className="form-star-text">*In USD, do NOT include $ or ,</p>
                    <br/>


                    <br/>
                    <input className="house-add-btn" type="submit" value="Update" />
                    <br/>
                    {/* <DeleteButton houseId={house._id} successCallback={() => navigate("/")} /> */}
                </form>
            </div>
            {/* {loaded && (
                <>
                    <HouseForm
                        onSubmitProp={updateSubmitHandler}
                        initialHouseName={house.houseName}
                    /> */}
                    {/* <DeleteButton houseId={house._id} successCallback={() => navigate("/")} />
                </> */}
            {/* )} */}
        </div>
    );
};
export default Update;

