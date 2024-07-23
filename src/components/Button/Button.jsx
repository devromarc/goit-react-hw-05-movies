import React from 'react';
import Proptype from 'prop-types';
import css from './Button.module.css';
const Button = ({ btn }) => {
  return <button className={css.btn}>{btn}</button>;
};

export default Button;

Button.prototype = {
  btn: Proptype.string.isRequired,
};
