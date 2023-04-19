import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';


export class MyCategoryImageInsert extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        MyCategoryImageID:"",
        MyCategoryID: "",
        Images: "",
        selectedFile: null
    };

    onChange = (prop) => (event) => {
        // Update the state 
        this.setState({ [prop]: event.target.value });
        console.log(prop + '-----' + event.target.value)

    };

    onChangephoto = event => {
        // Update the state 
        this.setState({ Images: event.target.value, selectedFile: event.target.files });
        console.log('hbdvfhdsfv      =--' + event.target.value + 'hbdvfhdsfv      =--' + event.target.files)
    };

    submitStateRecord = () => {
        const data = new FormData();
        data.append('MyCategoryImageID', this.state.MyCategoryImageID);
        data.append('MyCategoryID', this.state.MyCategoryID);
        var files = this.state.selectedFile;

        console.log(files);
        for (let i = 0 ; i < files.length ; i++) {
            data.append('Images', files[i]);
        }
        console.log(data);
        axios.post("http://localhost:5000/api/admin/mycategoryimage/", data);
        alert("Data Inserted");
        this.props.history.push("/MyCategoryImageDisplay");
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
                                                        <p className="h4"> MyCategoryImage Insert </p>
                                                    </div>
                                                    <label htmlFor="defaultContactName" className="text-muted m-0">
                                                        MyCategoryID
                                                    </label>
                                                    <CDBInput id="defaultContactName" className="mt-n3" type="text" onChange={this.onChange('MyCategoryID')} />
                                                    <label htmlFor="defaultContactMessage" className="text-muted m-0">
                                                        Images
                                                    </label>
                                                    <CDBInput id="defaultContactImage" className="mt-n3" type="file" onChange={this.onChangephoto} multiple/>
                                                    
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

export default MyCategoryImageInsert;
