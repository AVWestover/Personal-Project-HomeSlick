import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import {useParams, Link} from "react-router-dom";
import DeleteButton from './DeleteButton';
const Detail = (props) => {
    const {id} = useParams(); 
    const [oneHouse, setOneHouse] = useState({});
    const navigate = useNavigate();

// 
    const getHouse = () => {
        axios.get("http://localhost:8000/api/houses/" + props._id)
        .then(response => {
            setOneHouse(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/houses/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneHouse(res.data);
            })
            .catch((err) => console.log(err) )
    }, [id]);

    const deleteHouse = (_id) => {
        axios.delete(`http://localhost:8000/api/houses/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const editBtn = (_id) => {
        navigate(`/houses/edit/${_id}`);
    }


    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Explore</p>
                </Link>
            </div>
            <div className="detail-titlebtn-div">
            <h2 className="house-detailpage-title">{oneHouse.houseName}</h2>
            {/* <DeleteButton houseId={house._id} successCallback={() => navigate("/")} /> */}
            {/* <DeleteButton houseId={house._id} successCallback={()=>removeFromDom(house._id)} className="delete-btn"/> */}
            {/* <button onClick={ e => {deleteHouse(oneHouse._id)}} className="contact-btn">I'm Interested</button> */}
            <Link to={`/houses/contact/${oneHouse._id}`} className="contact-btn">
                    <p className="contact-btn-text">I'm Interested</p>
            </Link>
            </div>
            {/* ASKING PRICE */}
            <p>Asking Price:</p>
            <p><span className="detail-p-cont">${oneHouse.askingPrice}</span></p>
            <br/>

            {/* BEDS */}
            <p>Number of Beds: </p>
            <p><span className="detail-p-cont">{oneHouse.beds}</span></p>
            <br/>

            {/* BATHS */}
            <p>Number of Baths: </p>
            <p><span className="detail-p-cont">{oneHouse.baths}</span></p>
            <br/>

            {/* LOCATION */}
            <p>Home Location: </p>
            <p><span className="detail-p-cont">{oneHouse.location}</span></p>
            <br/>

            {/* DESCRIPTION */}
            <p>Home Description: </p>
            <p className="detail-description-cont"><span >{oneHouse.description}</span></p>
            <br/>

            {/* EDIT BTN */}
            <button onClick={ e => {editBtn(oneHouse._id)}} className="house-edit-btn">Edit Listing</button>
            {/* <Link to={`/houses/edit/${oneHouse._id}`} className="house-edit-btn">
                <p className="house-edit-btn-text">Edit Listing</p>
            </Link> */}
            {/* REMOVE LISTING */}
            <button onClick={ e => {deleteHouse(oneHouse._id)}} className="remove-listing-btn">Remove Listing</button>

        </div>
    );
};

export default Detail;

