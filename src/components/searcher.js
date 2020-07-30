import React, {useState} from "react";





function Searcher() {
  const [keyword, setKeyword] = useState("");

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        className="input-search"
        placeholder="Search Terms"
      ></input>
  );
}

export default Searcher;
