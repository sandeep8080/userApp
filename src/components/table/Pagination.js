import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

const PaginationComp = ({ currentPage, rowsPerPage, totalRows, setPage }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pages.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => setPage(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Pagination size="sm" className='d-flex justify-content-end'>
            {pages}
        </Pagination>
    )
};

export default PaginationComp;