import React from "react";
import { assets } from "@/assets/constants";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const TablePagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4 && currentPage < totalPages - 3) {
        pages.push("...", currentPage, "...");
      } else {
        pages.push("...");
      }
      pages.push(totalPages - 1, totalPages);
    }
    return pages;
  };

  return (
    <div className="down">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img className="paginateArrowIcon" src={assets.left} alt="left-arrow" />
      </button>
      {getPages().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            className={
              page === currentPage ? "paginateValue active" : "paginateValue"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="dots paginateValue">
            {page}
          </span>
        )
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img
          className="paginateArrowIcon"
          src={assets.right}
          alt="right-arrow"
        />
      </button>
    </div>
  );
};

export default TablePagination;
