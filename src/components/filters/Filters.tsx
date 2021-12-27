import React, { Dispatch, SetStateAction } from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import { Button } from "react-bootstrap";

type FilterPropsType = {
  setStatus: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<string>>;
  setSpecies: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Filters: React.FC<FilterPropsType> = ({
  setStatus,
  setPageNumber,
  setGender,
  setSpecies,
}) => {
  const clear = () => {
    setStatus("");
    setPageNumber(1);
    setGender("");
    setSpecies("");
  };
  return (
    <div>
      <Button
        className="btn btn-primary mt-2 mb-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        size="lg"
      >
        Filter
      </Button>
      <div className="collapse mb-4" id="collapseExample">
        <div className="card card-body">
          <div className="accordion" id="accordionExample">
            <Status setStatus={setStatus} setPageNumber={setPageNumber} />
            <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
            <Gender setGender={setGender} setPageNumber={setPageNumber} />
          </div>
          <div
            onClick={clear}
            style={{ cursor: "pointer" }}
            className="text-center text-danger text-underline mt-4 mb-4 border-danger"
          >
            Clear Filters
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
