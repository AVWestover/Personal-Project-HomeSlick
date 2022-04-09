import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from './DeleteButton';
const HouseList = (props) => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/houses')
            .then((res)=>{
                console.log(res.data);
                setHouses(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    const removeFromDom = houseId => {
        setHouses(houses.filter(house => house._id !== houseId))
    }


    return (
        <div className="list-outside-cont">
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Explore</p>
                </Link>
            </div>
            <div className="link-to-form-div">
                <Link to={`/houses/new`}>
                    <p className="list-form-link">add a new listing</p>
                </Link>
            </div>
            <h1 className="h1-text">HomeSlick -Find Your Dream Home</h1>
            <br/>
            <h3>Current Listings</h3>
            <div className="table-outside">
            <table className="list-table">
                <thead>
                    <tr>
                        <th>Asking Price</th>
                        <th>Home Name</th>
                        <th>Beds</th>
                        <th>Baths</th>
                    </tr>
                </thead>
            <tbody>



            {
            houses.map( house =>
                <tr>
                    {/* ASKING PRICE */}
                    <td>
                        <p>${house.askingPrice}</p>
                    </td>
                    {/* HOME NAME */}
                    <td key={house._id}>
                        <Link to={`/houses/${house._id}`} className="house-name-link">
                            {house.houseName}
                        </Link>
                    </td>
                    {/* BEDS */}
                    <td>
                        <p> {house.beds} </p>
                    </td>
                    {/* BATHS */}
                    <td>
                        <p> {house.baths} </p>
                    </td>
                </tr>
            )}


            </tbody>
        </table>
        </div>
    </div>
    );
};
export default HouseList;