import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: '',
      name2: '',
      add: ''
    };
  }
  async componentDidMount() {
  }
  async onPlusCount() {
    var count = this.state.count
    this.setState({
      count: count = count + 1
    })
  }
  async onMinusCount() {
    var count = this.state.count
    this.setState({
      count: count = count - 1
    })
  }

  async onChangeName() {
    var name = document.getElementById("change_name").value;
    this.setState({
      name: name
    })
    document.getElementById("change_name").value = '';
  }
  async onChangeName2(even) {
    var name = even.target.value;
    this.setState({
      name2: name
    })
  }
  async onAddName() {
    var name = document.getElementById("add_name").value;
    this.setState({
      add: name
    })
    document.getElementById("add_name").value = 0;
  }
  //----------------------------------------- Table Add Product List ----------------------------------------///

  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };

  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item],
      count_row: this.state.count_row + 1
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
      count_row: this.state.count_row - 1
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({
      rows,
      count_row: this.state.count_row - 1
    })
  }

  ///-----------------------------------------------------------------------------------------------------------------//

  render() {

    return (
      <div>
        <Container className="flex-login">
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4  background-login-card">
                  <CardBody>
                    <h1>State 0 :
                        <Button type="button" size="sm" color="link" style={{ color: 'greenyellow' }}
                        onClick={() => this.onPlusCount()}   >
                        <i class="fa fa-plus-circle" ></i>
                      </Button>
                      {this.state.count}
                      <Button type="button" size="sm" color="link" style={{ color: 'red' }}
                        onClick={() => this.onMinusCount()}   >
                        <i class="fa fa-minus-circle" ></i>
                      </Button>
                    </h1>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4  background-login-card">
                  <CardBody>
                    <h1>State 1 :
                        <Input type="text" id="value_name" name="value_name" value={this.state.name} readOnly />
                      <Input type="text" id="change_name" name="change_name" />
                      <Button color="primary" onClick={() => this.onChangeName()} className="px-4"  >Change</Button>
                    </h1>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4  background-login-card">
                  <CardBody>
                    <h1>State 2 : {this.state.name2}
                      <Input type="text" id="val_name2" name="val_name2" onChange={(e) => this.onChangeName2(e)} />
                    </h1>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4  background-login-card">
                  <CardBody>
                    <NavLink exact to={`/login`} >
                      <Button color="primary" className="px-4"  >Back</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}


export default State;

