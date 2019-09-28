import React, {Component} from "react";

import {
    Button,
    Col,
    Collapse,
    Form,
    FormGroup,
    Input,
    Jumbotron,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Row
} from "reactstrap";
import {NavLink} from "react-router-dom";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen: false,
            email : '',
            password : ''
        };
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal = () => {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
    handelLogin = (e) => {
        alert(`${this.state.email} ${this.state.password}`);
        e.preventDefault();
    }
    handleSignUp = () => {

    }
    handleChange = e => {
        const target = e.target;
        const val = target.value;
        const name = target.name;
        this.setState({
            [name] : val
        })
    }
    render() {

        return (

            <>
                <Navbar dark className={"bg-a"} expand={"md"}>
                    <div className="container">
                        <NavbarBrand href={"#"} >HRS</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav isOpen={this.state.isNavOpen} className={"mr-auto"} navbar>
                                <NavItem >
                                    <NavLink className={"nav-link"} to={"/home"} > Home </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className={"nav-link"} to={"/listings"} > Listings </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className={"nav-link"} to={"/about"} > About us </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink  className={"nav-link"} to={"/contact"}> Contact Us </NavLink>
                                </NavItem>
                            </Nav>

                            <Form inline onSubmit={e=>this.handelLogin(e)}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="email" name="email" id="exampleEmail" value={this.state.email} placeholder="Email" onChange={e => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="password" name="password" id="examplePassword" value={this.state.password} placeholder="password" onChange={e => this.handleChange(e)} />
                            </FormGroup>
                            <Button  color={"success"}> <span className="fa fa-sign-in"></span>Login</Button>
                        </Form>

                            <Nav className={"ml-auto"} navbar>
                                <NavItem><Button  onClick={this.toggleModal} color={"primary"}> <span className="fa fa-user-plus"></span> Sign Up</Button></NavItem>
                            </Nav>






                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"/>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Label htmlFor={"role"}>Role</Label>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Label>
                                            <Input type="radio" id="lessor" name="lessor"/>  Lessor
                                        </Label>
                                    </Col>
                                    <Col sm={6}>
                                        <Label>
                                            <Input type="radio" id="subtenant" name="subtenant"/>  Subtenant
                                        </Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="agree"/>
                                    I agree to terms and licences of the company
                                </Label>
                            </FormGroup>
                            <ModalFooter>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 ">
                                <h1>House Rental System</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem delectus dignissimos dolores eaque explicabo libero molestias mollitia nobis nulla pariatur perferendis, porro praesentium sint tempora? Cum labore laboriosam maxime perferendis, perspiciatis quaerat quis sed tenetur voluptatem! Illum natus neque quasi, quis ratione repellendus velit. A accusantium at cum dignissimos earum excepturi harum nostrum similique tenetur vero. Iste, repellendus soluta.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>



            </>

        );
    }
}

export default HeaderComponent;