import React from "react";
import propTypes from 'prop-types';

import { Container } from './styles';

export default function TextRangeInput({
  minRange, 
  maxRange, 
  value,
  label,
  onChange }) 
  {
  return (
    <Container>
      <div className="text-box">
        <span className="label">{label}</span>
      </div>
      <div className='tooltip-container'>
      <input 
        type="range" 
        min={minRange}
        onChange={onChange}
        max={maxRange} 
        value={value}
        className="range-input" />
      </div>
    </Container>
  );
}

TextRangeInput.propTypes = {
  minRange: propTypes.number.isRequired,
  maxRange: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
}
