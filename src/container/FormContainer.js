import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form/Form';
import { getHome, getAddress } from '../selectors/map';
import { updateHome, updateAddress } from '../actions/map';
import PropTypes from 'prop-types';
import { getHomeInfo, getAddressInfo } from '../services/map';
class FormContainer extends PureComponent {
  static propTypes = {
    home: PropTypes.string,
    address: PropTypes.string,
    handleChange: PropTypes.func,
    handleHomeSubmit: PropTypes.func,
    handleAddressSubmit: PropTypes.func
  }

  render() {
    return (
      <Form 
        home={this.props.home}
        address={this.props.address}
        onChange={this.props.handleChange} 
        onHomeSubmit={this.props.handleHomeSubmit}
        onAddressSubmit={this.props.handleAddressSubmit}
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
  handleHomeSubmit(home, event) {
    event.preventDefault();
    dispatch(getHomeInfo(home));
  },
  handleAddressSubmit(address, event) {
    event.preventDefault();
    dispatch(getAddressInfo(address));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
