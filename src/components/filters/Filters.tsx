import React, { Dispatch, SetStateAction } from "react";
import { Col } from "react-bootstrap";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

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
    <Col xl={3} lg={3} md={4} sm={4}>
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-danger text-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </Col>
  );
};

export default Filters;
