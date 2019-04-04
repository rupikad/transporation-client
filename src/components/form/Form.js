import React from 'react';
import PropTypes from 'prop-types';

function Form({ home, onChange }) {
  return (
    <label>
      Home
      <input type="text" name="home" value={home} onChange={onChange} />
    </label>
  );
}

Form.propTypes = {
  home: PropTypes.string,
  onChange: PropTypes.func
};

export default Form;
