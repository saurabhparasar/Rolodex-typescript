import React, { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder: string;
  className: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
