import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import PaginationComp from './Pagination';
import TableRow from './TableRow';

const TableComp = ({ rows, handleEditCells, handleSaveRow }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    const setTablePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Table striped bordered hover size="sm" className='mt-2'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => {
                        return (
                            <TableRow
                                key={index}
                                row={row}
                                handleEditCells={handleEditCells}
                                handleSaveRow={handleSaveRow}
                            />
                        )
                    })}
                </tbody>
            </Table>
            <PaginationComp
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                totalRows={rows.length}
                setPage={setTablePage}
            />
        </>

    )
};

export default TableComp;