import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./tableView.css";

class TableView extends Component{
    render(){
        // const NoOfRows = this.props.NoOfRows;
        // const NoOfColumns = this.props.NoOfColumns;
        const list = this.props.list;
        const headers = this.props.headers;
        
        return(
      <Table className = 'table-sticky' responsive>
      <thead className="thead-light">
          
        <tr className="table-primary">
          <th >#</th>
          {headers.map((ColName,index)=>(
            <th key={index}>{ColName}</th>
          ))}
          {/* {Array.from({ length: NoOfColumns  }).map((_,colindex) => (
            <th key={colindex}>{headers}</th>
          ))} */}
        </tr>

      </thead>
      <tbody className="tbody">
        {list.map((RowName,index)=>(
          <tr key={index}>
              <td>{index+1}</td>
             {RowName.map((RowName1,rowindex1)=>(
            <th key={rowindex1}>{RowName1}</th>
             ))}
          </tr>
        ))}
        {/* {Array.from({ length: NoOfRows }).map((_, rowIndex) => (
          
            
            <tr key={rowIndex}>
              <td>{rowIndex+1}</td>
            {list.map((rowname,index)=>(
            <th key={index}>{rowname}</th>
             ))} */}
              {/* {Array.from({ length: NoOfColumns }).map((_, colindex) => (
              <td key={colindex}>{list}</td>
            ))} */}
            {/* </tr>
          ))} */}
      </tbody>
    </Table>
        )
    }
}


export default TableView;