import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, Row, CardFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import PropsResult from './PropsResult'

class Props extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.match.params.code,
      name: ''
    };
  }
  async componentWillMount() {
    this.setState({
      name: 'My Name'
    })
  }
  async componentDidMount() {

  }

  render() {
    return (
      <div>
        <Container className="flex-login">
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4  background-login-card">
                  <CardBody>
                    <h1>Props 0 : {this.state.code}
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
                    <PropsResult
                      code={this.state.code}
                      name={this.state.name}
                    />
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


export default Props;

