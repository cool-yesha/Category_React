import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class CategoryUpdate extends Component {

    state = {
        MyCategoryImageID:"",
        MyCategoryID: "",
        Images: "",
        selectedFile: null,
        record: []
    };

    constructor(props) {
        super(props);
        this.state.MyCategoryImageID = (this.props.match.params.id);
        console.log(this.state.MyCategoryImageID);
        this.onDisplay();
    }


    componentDidMount() {
    }

    onDisplay = () => {
        axios.get(`http://localhost:5000/api/admin/mycategoryimage/`)
            .then(res => {
                const record = res.data;
                console.log(this.state.MyCategoryImageID);
                const newrowrecord = record.filter((newVal) => {
                    return newVal.MyCategoryImageID == this.state.MyCategoryImageID;
                });
                console.log(record);
                console.log(newrowrecord);
                this.setState({
                    MyCategoryID: newrowrecord[0].MyCategoryID,
                    Images: newrowrecord[0].Images
                });
            });
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
        data.append('MyCategoryImageID', 0);
        data.append('MyCategoryID', this.state.MyCategoryID);
        var files = this.state.selectedFile;

        console.log(files);
        for (let i = 0 ; i < files.length ; i++) {
            data.append('Images', files[i]);
        }
        console.log(data);
        axios.put(`http://localhost:5000/api/admin/mycategoryimage/${this.state.MyCategoryImageID}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        );
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
                                            <CDBCard style={{ width: '30rem' }}>
                                                <CDBCardBody className="mx-4">
                                                    <Form encType='multipart/form-data' onSubmit={this.submitStateRecord}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>MyCategoryID</Form.Label>
                                                            <Form.Control className="mt-n3" value={this.state.MyCategoryID} type="text" onChange={this.onChange('MyCategoryID')} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                            <Form.Label>Images</Form.Label>
                                                            <Form.Control className="mt-n3" type="file" onChange={this.onChangephoto} multiple/>
                                                        </Form.Group>
                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Form>
                                                </CDBCardBody>
                                            </CDBCard>
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

export default CategoryUpdate;
