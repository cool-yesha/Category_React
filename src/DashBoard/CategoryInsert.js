import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class CategoryInsert extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        CategoryID: "",
        Name: "",
        Description: "",
        Image: "",
        selectedFile: null,
        Image1: ""
    };

    onChange = (prop) => (event) => {
        // Update the state 
        this.setState({ [prop]: event.target.value });
        console.log(prop + '-----' + event.target.value)

    };

    onChangephoto = event => {
        // Update the state 
        this.setState({ Image: event.target.value, selectedFile: event.target.files[0] });
        console.log('hbdvfhdsfv      =--' + event.target.value + 'hbdvfhdsfv      =--' + event.target.files[0])
    };

    submitStateRecord = () => {
        var data = { "CategoryID": 0, "Name": this.state.Name, "Description": this.state.Description, "Image": this.state.selectedFile };
        console.log(data);
        axios.post("http://localhost:5000/api/admin/category/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        );
        alert("Data Inserted");
        this.props.history.push("/");
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
                                                        <p className="h4"> Category Insert </p>
                                                    </div>
                                                    <label htmlFor="defaultContactName" className="text-muted m-0">
                                                        Category Name
                                                    </label>
                                                    <CDBInput id="defaultContactName" className="mt-n3" type="text" onChange={this.onChange('Name')} />
                                                    <label htmlFor="defaultContactMessage" className="text-muted m-0">
                                                        Category Description
                                                    </label>
                                                    <CDBInput id="defaultContactMessage" className="mt-n3" type="textarea" onChange={this.onChange('Description')} />

                                                    <label htmlFor="defaultContactMessage" className="text-muted m-0">
                                                        Category Image
                                                    </label>
                                                    <CDBInput id="defaultContactImage" className="mt-n3" type="file" onChange={this.onChangephoto} />
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

export default CategoryInsert;
