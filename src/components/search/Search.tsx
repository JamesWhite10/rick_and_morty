import React, { Dispatch, SetStateAction } from "react";
import style from "./Search.module.scss";
import { Button } from "react-bootstrap";

type SearchPropsType = {
  setSearch: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Search: React.FC<SearchPropsType> = ({ setSearch, setPageNumber }) => {
  return (
    <div>
      <form className="d-flex justify-content-center gap-4 mb-4">
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for Characters..."
          type="text"
          className={style.input}
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
          }}
          size="lg"
          className={`${style.btn} btn btn-primary`}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
