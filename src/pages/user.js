import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from '../components/layout/Layout';
import TableComp from '../components/table/Table';
import rowData from '../mockData/userData';

const columns = [{
    dataField: 'fname',
    text: 'First Name'
}, {
    dataField: 'lname',
    text: 'Last Name'
}, {
    dataField: 'status',
    text: 'Status'
}];

let userDatacopy;

const UserPage = () => {
    const [userData, setUserData] = useState(rowData);

    const handleEditCells = (e, row) => {
        const dataIndex = userData.findIndex((r) => r.id === row.id);
        userDatacopy = [...userData];
        switch (e.target.id) {
            case "idFirstName":
                const newFname = {
                    ...userDatacopy[dataIndex],
                    fname: e.target.value
                };
                userDatacopy[dataIndex] = newFname;
                break;
            case "idLastName":
                const newLname = {
                    ...userDatacopy[dataIndex],
                    lname: e.target.value
                };
                userDatacopy[dataIndex] = newLname;
                break;
            case "idCheckBox":
                const newStatus = {
                    ...userDatacopy[dataIndex],
                    status: !row.status
                };
                userDatacopy[dataIndex] = newStatus;
                break;
        }
    };

    const handleSaveRow = () => {
        //console.log(userData, userDatacopy);
        setUserData(userDatacopy);
        console.log('Row data Saved!!');
    }


    return (
        <Layout>
            <Row>
                <Container>
                    <TableComp
                        rows={userData}
                        // editRow = {}
                        handleEditCells={handleEditCells}
                        handleSaveRow={handleSaveRow} />
                </Container>
            </Row>
        </Layout>
    )
};

export default UserPage;