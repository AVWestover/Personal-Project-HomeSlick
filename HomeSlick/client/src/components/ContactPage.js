import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import {useParams, Link} from "react-router-dom";
const ContactPage = (props) => {
    const {id} = useParams(); 
    const [oneHouse, setOneHouse] = useState({});
    const navigate = useNavigate();

// 
    const getHouse = () => {
        axios.get("http://localhost:8000/api/houses/contact/" + props._id)
        .then(response => {
            setOneHouse(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/houses/contact/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneHouse(res.data);
            })
            .catch((err) => console.log(err) )
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        
        navigate("/");
    }


    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Explore</p>
                </Link>
            </div>
            {/* <h1 className="h1-text">Contact {oneHouse.houseName}'s Sellers</h1> */}
            <h1 className="h1-text">Contact Sellers</h1>
            <br/>
            <form onSubmit={onSubmitHandler}>
                {/* YOUR NAME */}
                <div className= "form-input-div">
                <label>Your Name:</label><br/>

                <input
                    onChange = {null}
                    name="yourName"
                    type="text"
                />
            </div>
            <br/>

            {/* YOUR EMAIL */}
            <div className= "form-input-div">
                <label>Your Email:</label><br/>

                <input
                    onChange = {null}
                    name="yourEmail"
                    type="text"
                />
            </div>
            <br/>

            {/* YOUR OFFER */}
            <div className= "form-input-div">
                <label>Your Offer:</label><br/>

                <input
                    onChange = {null}
                    name="yourOffer"
                    type="text"
                />
            </div>
            <br/>

            {/* YOUR MESSAGE */}
            <div className= "form-descripton-div">
                <label>Your Message:</label><br/>

                <textarea className="description-input"
                onChange = {null}
                name="description" 
                cols="20" 
                rows="4">
                </textarea>
            </div>
            <br/>

            <br/>
            <input className="send-info-btn" type="submit" value="Send Your Info" />


            </form>

        </div>
    );
};

export default ContactPage;

