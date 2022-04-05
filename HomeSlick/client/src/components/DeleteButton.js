import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { houseId, successCallback } = props;
    const deleteHouse = e => {
        axios.delete('http://localhost:8000/api/houses/' + houseId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="delete-btn" onClick={deleteHouse}>
            Remove Post
        </button>
    )
}
export default DeleteButton;

