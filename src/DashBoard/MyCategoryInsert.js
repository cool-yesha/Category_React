import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class MyCategoryInsert extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        MyCategoryID: "",
        Name: "",
        Description: ""
    };

    onChange = (prop) => (event) => {
        // Update the state 
        this.setState({ [prop]: event.target.value });
        console.log(prop + '-----' + event.target.value)

    };
    submitStateRecord = () => {
        var data = { "MyCategoryID": 0, "Name": this.state.Name, "Description": this.state.Description};
        console.log(data);
        axios.post("http://localhost:5000/api/admin/mycategory/", data);
        alert("Data Inserted");
        this.props.history.push("/MyCategoryDisplay");
        document.location.reload();
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
                                    <CDBContainer>
                                        <form id="quickForm" encType='multipart/form-data'>

                                            <CDBCard style={{ width: '30rem' }}>
                                                <CDBCardBody className="mx-4">
                                                    <div className="text-center mt-4 mb-4">
                                                        <p className="h4"> MyCategory Insert </p>
                                                    </div>
                                                    <label htmlFor="defaultContactName" className="text-muted m-0">
                                                        MyCategory Name
                                                    </label>
                                                    <CDBInput id="defaultContactName" className="mt-n3" type="text" onChange={this.onChange('Name')} />
                                                    <label htmlFor="defaultContactMessage" className="text-muted m-0">
                                                        MyCategory Description
                                                    </label>
                                                    <CDBInput id="defaultContactMessage" className="mt-n3" type="textarea" onChange={this.onChange('Description')} />

                                                    <CDBBtn
                                                        outline
                                                        color="secondary"
                                                        style={{ width: '40%' }}
                                                        className="btn-block mt-5 mx-auto"
                                                        onClick={this.submitStateRecord}
                                                    >
                                                        Submit
                                                    </CDBBtn>
                                                </CDBCardBody>
                                            </CDBCard>
                                        </form>

                                    </CDBContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MyCategoryInsert;
