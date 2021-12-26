import React, { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { InfoType } from "../../types";

type PaginationPropsType = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  info: InfoType;
};

const Pagination: React.FC<PaginationPropsType> = ({ pageNumber, setPageNumber, info }) => {
  let display;
  if (info) {
    return (
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-danger btn-lg"
        previousClassName="btn btn-danger btn-lg"
        previousLinkClassName="text-decoration-none text-white"
        nextLinkClassName="text-decoration-none text-white"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        className="pagination justify-content-center align-items-center gap-0 gap-xl-5 gap-lg-4 gap-md-3 gap-sm-2 mt-5 mb-5"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info.pages}
      />
    );
  } else if (!info) {
    display = "";
  }
  return <>{display}</>;
};

export default Pagination;
