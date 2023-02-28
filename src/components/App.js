import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => setListings(data))
  }, [])
  console.log(listings)

  function handleDelete(id){
    const updatedListing = listings.filter((listing)=> listing.id !== id)
    setListings(updatedListing)
  }

  function handleSubmit(value){
    console.log(value)
    const updatedListing = listings.filter((listing)=> listing.description === value)
    setListings(updatedListing)
  }

  function handleAdd(data) {
    console.log("from app", data)
    const updatedListing = [...listings, data]
    setListings(updatedListing)
  }

  return (
    <div className="app">
      <Header listings={listings} onSubmit={handleSubmit} onAdd={handleAdd}/>
      <ListingsContainer listings={listings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
