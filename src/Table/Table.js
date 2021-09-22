import React from 'react';
import MaterialTable from 'material-table';

const Table=(props)=>{
    console.log(props)
    const columns=[
        {title: 'Image', field: 'image'},
        {title: 'Name', field: 'name'},
        {title: 'Gender', field: 'gender'},
        {title: 'Class', field: 'class'},
        {title: 'Home', field: 'home'},
        {title: 'Major', field: 'major'},
        {title: 'Activity', field: 'activity'},
    ]

    return(
        <MaterialTable
        title="Render Image Preview"
        columns={columns}
        options={{
            export: true
        }}
        data={props.data}

        ></MaterialTable>
    )
}

export default Table;

