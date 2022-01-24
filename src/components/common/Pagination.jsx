import React from "react";
import _ from "lodash";

function Pagination({ itemCount, pageSize }) {
  const pagesCount = itemCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
