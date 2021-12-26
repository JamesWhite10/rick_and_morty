import React, { Dispatch, SetStateAction } from "react";
import FilterBtn from "../FilterBTN";

type StatusPropsType = {
  setStatus: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Status: React.FC<StatusPropsType> = ({ setStatus, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              name="status"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
