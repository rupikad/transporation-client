import React from 'react';
import PropTypes from 'prop-types';

function Form() {
  return (
    <div>
      <form>
        <label>
          Home
          <input type="text" name="home" />
        </label>
        <label>
          Provider Address
          <input type="text" name="address" />
        </label>
        <label>
          Time
          <input type="text" name="time" />
        </label>
      </form>
    </div>
  );
}

Form.propTypes = {
  home: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string
};

export default Form;
