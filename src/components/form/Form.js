import React from 'react';
import PropTypes from 'prop-types';

function Form({ onChange, home, address, time }) {
  return (
    <div>
      <form>
        <label>
          Home
          <input type="text" name="home" value={home} onChange={onChange} />
        </label>
        <label>
          Provider Address
          <input type="text" name="address" value={address} onChange={onChange}/>
        </label>
        <label>
          Date
          <input type="text" name="date" />
        </label>
        <label>
          Time
          <input type="text" name="time" value={time} onChange={onChange}/>
        </label>
      </form>
    </div>
  );
}

Form.propTypes = {
  home: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
  onChange: PropTypes.func,
};

export default Form;
