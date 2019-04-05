import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import styles from './Form.css';

function Form({ home, onChange }) {
  return (
    <>
    <main>
      <Header/>
      <form className={styles.form}>
        <label>
        Home
          <input type="text" name="home" value={home} onChange={onChange} />
        </label>
      </form>
    </main>
    </>
  );
}

Form.propTypes = {
  home: PropTypes.string,
  onChange: PropTypes.func
};

export default Form;
