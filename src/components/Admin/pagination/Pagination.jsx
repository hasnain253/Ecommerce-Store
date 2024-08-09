import React, { useState } from "react";

const Pagination = ({
  pageOptions,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  gotoPage,
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
    </div>
  );
};

export default Pagination;
