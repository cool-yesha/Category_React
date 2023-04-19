import React, { Component } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class MyCategoryImageDisplay extends Component {

  state = {
    record: []
  };
  constructor(props) {
    super(props);
    this.onDisplay();

  }
  onDisplay = () => {
    axios.get(`http://localhost:5000/api/admin/mycategoryimage/`)
      .then(res => {
        const record = res.data;
        this.setState({ record });
      });
  };

  deleteRecord = (categoryid) => {
    axios.delete(`http://localhost:5000/api/admin/mycategoryimage/${categoryid}`)
      .then((result) => {
        this.onDisplay();
      })
      .catch(() => {
        alert('Error in the Code');
      });
  };

  render() {
    return (
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
          <div style={{ height: "100%" }}>
            <div style={{ padding: "20px 5%", height: "calc(100% - 64px)", overflowY: "scroll" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(200px, 700px))" }}>
                <div className="mt-5">
                  <h4 className="font-weight-bold mb-3">MyCategoryImage</h4>
                  <a className="btn" href="/MyCategoryImageInsert" ><i className="fas fa-plus">Add MyCategoryImage</i></a>
                  <CDBTable hover responsive>
                    <CDBTableHeader>
                      <tr>
                        <th>#</th>
                        <th>MyCategoryID</th>
                        <th>Images</th>
                        <th>Action</th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                      {
                        this.state.record.map(row =>
                          <tr key={row.MyCategoryImageID}>
                            <td>{row.MyCategoryImageID}</td>
                            <td>{row.MyCategoryID}</td>
                            <td> {
                              row.Images.split(',').map((n, index) => {
                                return <img key={row.MyCategoryImageID} src={`http://localhost:5000/images/${n}`} height="50" width="50" />
                              })
                            }</td>
                            <td>
                              <a className="text-danger mr-2"
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Do you really want to delete " + row.Name
                                  )
                                  if (confirmBox === true) {
                                    this.deleteRecord(row.MyCategoryImageID)
                                  }
                                }}> <i className="far fa-trash-alt" style={{ fontSize: "18px", marginRight: "5px" }}></i></a>
                              &nbsp;&nbsp;

                              <a className="text-primary mr-2"
                                onClick={() => {
                                  this.props.history.push(`/MyCategoryImageUpdate/${row.MyCategoryImageID}`);
                                  document.location.reload();
                                }}> <i className="fa fa-edit" style={{ fontSize: "18px", marginRight: "5px" }}></i></a>
                            </td>
                          </tr>
                        )
                      }
                    </CDBTableBody>
                  </CDBTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default MyCategoryImageDisplay;
