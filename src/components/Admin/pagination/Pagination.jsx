import React, { useState } from "react";

const Pagination = ({
  pageOptions,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  gotoPage,
  pageSize,
  setPageSize,
  pageIndex,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(pageIndex);

  const handlePageClick = (index) => {
    gotoPage(index);
    setCurrentPageIndex(index);
  };

  return (
    <div className="pagination">
      <button onClick={previousPage} disabled={!canPreviousPage}>
        {"<"}
      </button>
      {pageOptions.map((index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index)}
          className={index === currentPageIndex ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={!canNextPage}>
        {">"}
      </button>
      <span>
        Page{" "}
        <strong>
          {currentPageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[5, 10, 20].map((size) => (
          <option key={size} value={size}>
            Show {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
