import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
  const {id, description, image, location} = listing
  const [isFavorite, setIsFavorite] = useState(false)

function toggleIsFavorite(){
  setIsFavorite((isFavorite) => !isFavorite)
}

function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
  console.log(id)
  onDelete(id) 
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleIsFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleIsFavorite}  className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} value={id} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
