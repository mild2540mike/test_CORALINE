import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
// Import Bootstrap source files
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardFooter } from 'reactstrap';

import UserModel from '../../models/UserModel';
var user_model = new UserModel;
class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {

  }

  async handleSubmit(event) {
    event.preventDefault();
    var arr = {};
    var user_username = document.getElementById("user_username").value;
    var user_password = document.getElementById("user_password").value;
    if (user_username == '') {
      swal({
        title: "Warning!",
        text: "Please Check Your Username ",
        icon: "warning",
        button: "Close",
      });
    } else if (user_password == '') {
      swal({
        title: "Warning!",
        text: "Please Check Your Password ",
        icon: "warning",
        button: "Close",
      });
    } else {
      arr['user_username'] = user_username;
      arr['user_password'] = user_password;
      const user_login = await user_model.checkLogin(arr);
      if (user_login) {
        localStorage.setItem('user_login', JSON.stringify(user_login));
        window.location.reload()
        swal({
          title: "success!",
          text: "Login success ",
          icon: "success",
          button: "Close",
        });

      } else {
        swal({
          title: "Warning!",
          text: "Please Check Your  Username  Or Password ",
          icon: "warning",
          button: "Close",
        });

      }
    }
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="myForm">
        <div>
          <Container className="flex-login">
            <Row className="justify-content-center">
              <Col md="6">
                <CardGroup>
                  <Card className="p-4  background-login-card">
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="user_username" name="user_username" placeholder="Username" aria-describedby="inputGroupPrepend21" required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="user_password" name="user_password" placeholder="Password" required />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4"  >Login</Button>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <NavLink exact to={`/state`} >
                        <Button color="primary" className="px-4"  >State</Button>
                      </NavLink>
                      <NavLink exact to={`/props/US0001`} >
                        <Button color="primary" className="px-4"  >Props</Button>
                      </NavLink>
                    </CardFooter>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
    );
  }
}


export default Login;

