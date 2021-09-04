import React from 'react'
import PropTypes from 'prop-types';
import ReactSelect from 'react-select'

function Select({ options, onChange }) {
  return <ReactSelect options={options} onChange={(value) => onChange(value)}/>
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
}

export default Select;
