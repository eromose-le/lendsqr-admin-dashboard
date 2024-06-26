import React from "react";
import { assets } from "@/assets/constants";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

export const TablePagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageLength = pageNumbers.length;

  const isValidPageBackward = (_currentPage: number) => {
    return _currentPage <= 1;
  };

  const isValidPageForward = (_currentPage: number, _pageNumber: number) => {
    return _currentPage >= _pageNumber;
  };

  return (
    <div className="paginateContainer">
      {/* top */}
      <div className="top">
        <p className="paginateText">Showing</p>
        <div className="paginateSelectContainer">
          <select className="paginateSelect" name="count" id="count">
            <option value="100" className="paginateOption">
              100
            </option>
            <option value="200" className="paginateOption">
              200
            </option>
            <option value="300" className="paginateOption">
              300
            </option>
          </select>
        </div>
        <p className="paginateText">out of {totalPosts}</p>
      </div>

      {/* down */}
      <div className="down">
        <img
          onClick={() =>
            isValidPageBackward(currentPage)
              ? setCurrentPage(1)
              : setCurrentPage(currentPage - 1)
          }
          className="paginateArrowIcon"
          src={assets.left}
          alt="left-arrow"
        />
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage ? "paginateValue active" : "paginateValue"
            }
          >
            {number}
          </button>
        ))}
        <img
          onClick={() =>
            isValidPageForward(currentPage, pageLength)
              ? setCurrentPage(pageLength)
              : setCurrentPage(currentPage + 1)
          }
          className="paginateArrowIcon"
          src={assets.right}
          alt="right-arrow"
        />
      </div>
    </div>
  );
};
