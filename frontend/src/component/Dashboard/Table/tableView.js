import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./tableView.css";

class TableView extends Component{
    render(){
        // const NoOfRows = this.props.NoOfRows;
        // const NoOFColumns = this.props.NoOFColumns;
        return(
      <Table style={{height:'60vh'}}>
      <thead class="thead-light">
        <tr class="table-primary">
          <th >#</th>
          {Array.from({ length: 6 }).map((_, colindex) => (
            <th key={colindex}>Table<br></br>heading {colindex+1}</th>
          ))}
        </tr>
      </thead>
      <tbody class="tbody">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
            
            <tr key={rowIndex}>
              <td>{rowIndex+1}</td>
              {Array.from({ length: 6 }).map((_, colindex) => (
              <td key={colindex}>Table cell {colindex+1},{rowIndex+1}</td>
            ))}
            </tr>
          ))}
      </tbody>
    </Table>
        )
    }
}


// function TableView() {
//   return (
//     <Table responsive>
//       <thead>
//         <tr>
//           <th>#</th>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <th key={index}>Table heading</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from({ length: 12 }).map((_, index) => (
            
//             <tr key={index}>
//               <td>{index}</td>
//               {Array.from({ length: 12 }).map((_, index) => (
//               <td key={index}>Table cell {index}</td>
//             ))}
//             </tr>
//           ))}
//       </tbody>
//     </Table>
//   );
// }

export default TableView;