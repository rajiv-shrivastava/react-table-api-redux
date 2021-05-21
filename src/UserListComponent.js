// import React from "react";

// import { useTable, useFilters, useGlobalFilter, useAsyncDebounce,useSortBy } from 'react-table'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import UserDataExport from './UserDataExport'
// import {userList} from './userList.json'

// // Define a default UI for filtering
// function GlobalFilter({
//     preGlobalFilteredRows,
//     globalFilter,
//     setGlobalFilter,
// }) {
//     const count = preGlobalFilteredRows.length
//     const [value, setValue] = React.useState(globalFilter)
//     const onChange = useAsyncDebounce(value => {
//         setGlobalFilter(value || undefined)
//     }, 200)

//     return (
//         <span>
//             Search:{' '}
//             <input
//                 className="form-control"
//                 value={value || ""}
//                 onChange={e => {
//                     setValue(e.target.value);
//                     onChange(e.target.value);
//                 }}
//                 placeholder={`${count} records...`}
//             />
//         </span>
//     )
// }

// function DefaultColumnFilter({
//     column: { filterValue, preFilteredRows, setFilter },
// }) {
//     const count = preFilteredRows.length

//     return (
//         <input
//             className="form-control"
//             value={filterValue || ''}
//             onChange={e => {
//                 setFilter(e.target.value || undefined)
//             }}
//             placeholder={`Search ${count} records...`}
//         />
//     )
// }

// function Table({ columns, data }) {

//     const defaultColumn = React.useMemo(
//         () => ({
//             // Default Filter UI
//             Filter: DefaultColumnFilter,
//         }),
//         []
//     )

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//         state,
//         preGlobalFilteredRows,
//         setGlobalFilter,
//     } = useTable(
//         {
//             columns,
//             data,
//             defaultColumn
//         },
//         useFilters,
//         useGlobalFilter,
//         useSortBy
//     )

//     return (
//         <div>
//             <div className="text-right">
//                 <Link to="/"> 
//                 <button className="btn btn-sm btn-warning"> Go to Home Page </button> 
//                 </Link>
//             </div>
//             <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={state.globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//             />
//             <table className="table" {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps()}>
//                                     {column.render('Header')}
//                                     <div>
//                                         {column.canFilter ? column.render('Filter') : null}
//                                     </div>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row, i) => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => {
//                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 })}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//             <UserDataExport />   
//         </div>
//     )
// }

// const data = userList


// function UserListComponent() {
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'User Data',
//                 columns: [
//                     {
//                         Header: 'Name',
//                         accessor: 'userName',
//                     },
//                     {
//                         Header: 'Date Of Birth',
//                         accessor: 'dob'
//                     },
//                     {
//                         Header: 'Age',
//                         accessor: 'age'
//                     },
//                     {
//                         Header: 'Number of Guests',
//                         accessor: 'noOfGuests'
//                     },
//                     {
//                         Header: 'Profile profession',
//                         accessor: 'profession'
//                     },
//                 ],
//             },
//         ],
//         []
//     )

//     return (
//         <Table columns={columns} data={data} />
//     )
// }

// export default UserListComponent;