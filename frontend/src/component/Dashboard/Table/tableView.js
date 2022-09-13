import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import "./tableView.css";




class TableView extends Component {


  render() {
    // const navigation = use
    const list = this.props.list;
    const headers = this.props.headers;
    // const yesColLinkNo = this.props.yesColLinkNo;
    // const link=this.props.link;
    const link = "http://localhost:3001/Coordinator/System-user";
    const yesColLinkNo = 0;



    return (


      <Table style={{ maxHeight: '60vh' }}>


        <thead className="thead-light">

          <tr className="table-primary">

            {headers.map((ColName, index) => (
              <th key={index}>{ColName}</th>
            ))}
          </tr>

        </thead>
        {/* <tbody className="tbody">
            {list.map((RowName, index) => (

              <tr key={index}>
                {RowName.map((RowName1, rowindex1) => {
                  if (yesColLinkNo == 1) {
                    return rowindex1 == 0 ? <td key={rowindex1} style={{ color: 'blue', cursor: 'pointer' }}><a href={link}>{RowName1}</a></td> : <td key={rowindex1}>{RowName1}</td>

                  }
                  if (yesColLinkNo == 0) {
                    return <td key={rowindex1}>{RowName1}</td>

                  }


                }


                )}
              </tr>
            ))}

          </tbody> */}

        <tbody className="tbody">
          {list.map((RowName, index) => {
            // console.log(RowName);

            return (
              <tr>

                {
                  Object.keys(RowName).map((keyName, i) => (

                    <td className="travelcompany-input" key={i}>
                      {RowName[keyName]}
                    </td>
                  ))
                }
                

              </tr>

            );



          })}

        </tbody>
      </Table >


    )
  }
}


export default TableView;

