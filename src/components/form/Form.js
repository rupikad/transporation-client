import React from 'react';
import PropTypes from 'prop-types';

function Form({ home, address, onChange, onSubmit }) {
  return (
    <>
    <form onSubmit={onSubmit.bind(null, home, address)}>
      <label>
        Home
        <input type="text" name="home" value={home} onChange={onChange} />
      </label>
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
  onSubmit: PropTypes.func
};

export default Form;
