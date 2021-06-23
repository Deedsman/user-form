import React from "react";

export default function Pagination({ currentNumber, pages }) {
  return (
    <div className='pagination'>
      {pages.pages.map((p, i) => {
        return (
          <span
            key={i}
            onClick={(e) => currentNumber(p)}
            className={`${pages.currentPage === p && "selected"}`}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}
