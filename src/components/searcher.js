import React from "react";



function Searcher() {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        className="input-search"
        placeholder="Search Terms"
      ></input>
    </form>
  );
}

export default Searcher;
