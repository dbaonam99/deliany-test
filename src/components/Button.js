import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const colors = {
  primary: "#1878fe",
  secondary: "#fc0005",
}

function Button({ children, onClick, type }) {
  return <div className="button" onClick={onClick} style={{ color: colors[type] }}>
    {children}
  </div>;
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button;