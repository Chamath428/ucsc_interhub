import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./tableView.css";

class TableView extends Component{
    render(){
        const list = this.props.list;
        const headers = this.props.headers;
        
        return(
        <Table style={{maxHeight:'60vh'}}>
           <thead className="thead-light">
          
              <tr className="table-primary">
               
                {headers.map((ColName,index)=>(
                  <th key={index}>{ColName}</th>
                ))}
              </tr>

            </thead>
            <tbody className="tbody">
              {list.map((RowName,index)=>(
                <tr key={index}>
                  {RowName.map((RowName1,rowindex1)=>(
                  <td key={rowindex1}>{RowName1}</td>
                  ))}
                </tr>
              ))}
             
            </tbody>
        </Table>
        )
    }
}


export default TableView;