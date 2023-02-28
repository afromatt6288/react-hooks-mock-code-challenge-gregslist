import React from "react";
import Search from "./Search";
import NewListingForm from "./NewListingForm"

function Header({onSubmit, onAdd}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmit={onSubmit}/>
      <span>
      <NewListingForm onAdd={onAdd}/>
      </span>
    </header>
  );
}

export default Header;
