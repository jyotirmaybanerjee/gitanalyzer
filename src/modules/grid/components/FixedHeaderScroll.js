import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {makeData, Tips} from './Utils';

class FixedHeaderScroll extends Component {
    state = {
      data: makeData()
    }

    render() {
      const { data } = this.state;
      return (
        <div>
            <ReactTable
                data={data}
                columns={[
                    {
                    Header: 'Name',
                    columns: [
                        {
                        Header: 'First Name',
                        accessor: 'firstName'
                        },
                        {
                        Header: 'Last Name',
                        id: 'lastName',
                        accessor: d => d.lastName
                        }
                    ]
                    },
                    {
                    Header: 'Info',
                    columns: [
                        {
                        Header: 'Age',
                        accessor: 'age'
                        }
                    ]
                    }
                ]}
                defaultPageSize={20}
                style={{
                    height: '600px' // This will force the table body to overflow and scroll, since there is not enough room
                }}
                className="-striped -highlight"
            />
            <br />
            <Tips />
        </div>
      );
    }
}

export default FixedHeaderScroll;
