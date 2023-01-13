import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChangeText = (e) => {
    setTerm(e.target.value);
  };
  const handleClick = () => {
    onSubmit(term);
  };

  return (
    <div>
      <input type="text" value={term} onChange={handleChangeText} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default SearchBar;
