import React, {useState} from "react";

function NewListingForm ({onAdd}) {
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
                id: "",
                description : description, 
                image: image, 
                location: location
        }
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => onAdd(data))


        // console.log(formData)
        // onAdd(formData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Listing</h2>
            <label>Description:</label>
            <input type="text" id="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <label>Image:</label>
            <input type="text" id="image" value={image} onChange={(e)=> setImage(e.target.value)}/>
            <label>Location:</label>
            <input type="text" id="location" value={location} onChange={(e)=> setLocation(e.target.value)}/>
            <button type="submit">Add Listing</button>
        </form>
    )
}

export default NewListingForm