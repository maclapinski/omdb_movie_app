import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [isTermValid, setIsTermValid] = useState(false);

  const isInputValid = (input) => {
    input.length > 0 ? setIsTermValid(true) : setIsTermValid(false);
  };
  const onInputChange = (event) => {
    isInputValid(event.target.value);
    setTerm(event.target.value);
    props.onChange(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (isTermValid) {
      props.onSubmit();
      console.log("Term Submitted");
    } else {
      console.log("Term Invalid");
    }
  };

  return (
    <div className="search-bar">
      <form action="." onSubmit={onSearchSubmit}>
        <SearchIcon />
        <input
          type="search"
          value={term}
          placeholder="Search..."
          onChange={onInputChange}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
