import React, { Component } from 'react';
import { CDBInput, CDBFileUploader, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class CategoryUpdate extends Component {

    state = {
        CategoryID: "",
        Name: '',
        Description: "",
        Image: "",
        selectedFile: null,
        Image1: "",
        record: []
    };

    constructor(props) {
        super(props);
        this.state.CategoryID = (this.props.match.params.id);
        console.log(this.state.CategoryID);
        this.onDisplay();
    }


    componentDidMount() {
    }

    onDisplay = () => {
        axios.get(`http://localhost:5000/api/admin/category/`)
            .then(res => {
                const record = res.data;
                console.log(this.state.CategoryID);
                const newrowrecord = record.filter((newVal) => {
                    return newVal.CategoryID == this.state.CategoryID;
                });
                console.log(record);
                console.log(newrowrecord);
                this.setState({
                    Name: newrowrecord[0].Name,
                    Description: newrowrecord[0].Description,
                    Image: newrowrecord[0].Image
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
        this.setState({ Image: event.target.value, selectedFile: event.target.files[0] });
        console.log('hbdvfhdsfv      =--' + event.target.value + 'hbdvfhdsfv      =--' + event.target.files[0])
    };

    submitStateRecord = () => {
        var data = { "CategoryID": this.state.CategoryID, "Name": this.state.Name, "Description": this.state.Description, "Image": this.state.selectedFile };
        console.log(data);
        axios.put(`http://localhost:5000/api/admin/category/${this.state.CategoryID}`, data, {
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
                                            <CDBCard style={{ width: '30rem' }}>
                                                <CDBCardBody className="mx-4">
                                                    <Form encType='multipart/form-data' onSubmit={this.submitStateRecord}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Category Name</Form.Label>
                                                            <Form.Control className="mt-n3" value={this.state.Name} type="text" onChange={this.onChange('Name')} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Category Description</Form.Label>
                                                            <Form.Control value={this.state.Description} type="textarea" onChange={this.onChange('Description')} style={{'height':'100px'}} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                            <Form.Label>Category Image</Form.Label>
                                                            <Form.Control className="mt-n3" type="file" onChange={this.onChangephoto} />
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
