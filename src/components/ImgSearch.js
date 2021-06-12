import React from "react";
import "../style/ImgSearch.css";

const ImgSearch = (props) => {
  return (
    <div className="imageSearch">
      {/* onSubmit adalah built-in dari react attribut */}
      <form onSubmit={props.handleRequest} className="imageSearch__form">
        <input
          type="text"
          autoComplete="off"
          name="searchValue"
          placeholder="Search for images"
        />
        &nbsp;
        <button data-testid="buttonImgSearch">Search</button>
      </form>
    </div>
  );
};

export default ImgSearch;
