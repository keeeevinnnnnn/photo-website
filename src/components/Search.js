import React from "react";

const Search = ({ search, setInput }) => {
  const intputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="Search">
      <input onChange={intputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
