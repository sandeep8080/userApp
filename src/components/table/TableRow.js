import React, { useState } from 'react';
import ButtonComp from '../button/ButtonComp';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const TableRow = ({ row, handleEditCells, handleSaveRow }) => {
    const [btnText, setBtnText] = useState('Edit');
    const [isEdit, setIsEdit] = useState(false);

    const handleBtnClick = (e) => {
        console.log(e.target.innerText);
        const text = e.target.innerText;
        if (text === 'Edit') {
            setIsEdit(true);
            setBtnText('Save');
        } else {
            handleSaveRow();
            setIsEdit(!isEdit);
            setBtnText('Edit');
        }
    }
    return (
        <tr >
            <td>{isEdit ?
                <FormControl
                    id='idFirstName'
                    onChange={(e) => handleEditCells(e, row)}
                />
                :
                row.fname}
            </td>
            <td>{isEdit ?
                <FormControl
                    id='idLastName'
                    onChange={(e) => handleEditCells(e, row)}
                />
                :
                row.lname}
            </td>
            <td>
                <Form.Check
                    custom
                    checked={row.status}
                    onChange={(e) => handleEditCells(e, row)}
                    type='checkbox'
                    id='idCheckBox'
                />
            </td>
            <td><ButtonComp text={btnText} handleBtnClick={handleBtnClick} />
            </td>
        </tr>
    )
};

export default TableRow;