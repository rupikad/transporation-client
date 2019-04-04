import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form/Form';
import { getHome } from '../selectors/map';
import { updateHome } from '../actions/map';
import PropTypes from 'prop-types';
class FormContainer extends PureComponent {
  static propTypes = {
    home: PropTypes.string,
    handleChange: PropTypes.func
  }

  render() {
    return (
      <Form 
        home={this.props.home}
        onChange={this.props.handleChange} 
      />
    );
  }
}

const mapStateToProps = state => ({
  home: getHome(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateHome(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
