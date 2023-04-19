import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class MyCategoryUpdate extends Component {

    state = {
        MyCategoryID: "",
        Name: "",
        Description: "",
        record: []
    };

    constructor(props) {
        super(props);
        this.state.MyCategoryID = (this.props.match.params.id);
        console.log(this.state.MyCategoryID);
        this.onDisplay();
    }


    componentDidMount() {
    }

    onDisplay = () => {
        axios.get(`http://localhost:5000/api/admin/mycategory/`)
            .then(res => {
                const record = res.data;
                console.log(this.state.MyCategoryID);
                const newrowrecord = record.filter((newVal) => {
                    return newVal.MyCategoryID == this.state.MyCategoryID;
                });
                console.log(record);
                console.log(newrowrecord);
                this.setState({
                    Name: newrowrecord[0].Name,
                    Description: newrowrecord[0].Description,
                });
            });
    };



    onChange = (prop) => (event) => {
        // Update the state 
        this.setState({ [prop]: event.target.value });
        console.log(prop + '-----' + event.target.value)

    };

    submitStateRecord = () => {
        var data = { "MyCategoryID": this.state.MyCategoryID, "Name": this.state.Name, "Description": this.state.Description};
        console.log(data);
        axios.put(`http://localhost:5000/api/admin/mycategory/${this.state.MyCategoryID}`, data);
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
                                        <CDBCard style={{ width: '30rem' }}>
                                                <CDBCardBody className="mx-4">
                                                    <Form onSubmit={this.submitStateRecord}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>MyCategory Name</Form.Label>
                                                            <Form.Control className="mt-n3" value={this.state.Name} type="text" onChange={this.onChange('Name')} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>MyCategory Description</Form.Label>
                                                            <Form.Control value={this.state.Description} type="textarea" onChange={this.onChange('Description')} style={{'height':'100px'}} />
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

export default MyCategoryUpdate;
