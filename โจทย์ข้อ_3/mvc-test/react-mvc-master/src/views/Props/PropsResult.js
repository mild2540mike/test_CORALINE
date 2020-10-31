import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, Row } from 'reactstrap';

class PropsResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      name: ''
    };
  }
  async componentDidMount() {
    this.setState({
      code: this.props.code,
      name: this.props.name
    })
  }

  render() {
    return (
      <div>
        <h1>Props 1 : </h1>
        <h1>code : {this.state.code}</h1>
        <h1>name : {this.state.name}</h1>
      </div>
    );
  }
}

export default PropsResult;

