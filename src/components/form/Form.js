import React from 'react';
import PropTypes from 'prop-types';

function Form({ home, address, onChange, onHomeSubmit, onAddressSubmit }) {
  return (
    <>
    <form onSubmit={onHomeSubmit.bind(null, home)}>
      <label>
        Home
        <input type="text" name="home" value={home} onChange={onChange} />
      </label>
      <button>SUBMIT</button>
    </form>
    <form onSubmit={onAddressSubmit.bind(null, home)}>
      <label>
        Provider Address:
        <input type="address" name="address" value={address} onChange={onChange} />
      </label>
      <button>SUBMIT</button>
    </form>
    </>
  );
}

Form.propTypes = {
  home: PropTypes.string,
  address: PropTypes.string,
  onChange: PropTypes.func,
  onHomeSubmit: PropTypes.func,
  onAddressSubmit: PropTypes.func
};

export default Form;
