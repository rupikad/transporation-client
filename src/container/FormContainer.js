import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form/Form';
import { getHome, getAddress } from '../selectors/map';
import { updateHome, updateAddress } from '../actions/map';
import PropTypes from 'prop-types';
import { fetchDirectionsInfo } from '../actions/map';
class FormContainer extends PureComponent {
  static propTypes = {
    home: PropTypes.string,
    address: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <Form 
        home={this.props.home}
        address={this.props.address}
        onChange={this.props.handleChange} 
        onSubmit={this.props.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  home: getHome(state),
  address: getAddress(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    const factoryMethod = {
      home: updateHome,
      address: updateAddress
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  handleSubmit(home, address, event) {
    event.preventDefault();
    dispatch(fetchDirectionsInfo(home, address));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
