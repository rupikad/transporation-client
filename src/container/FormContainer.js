import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form/Form';

export default class FormContainer extends PureComponent {
  render() {
    return (
      <Form />
    );
  }
}
