import React from 'react'
import propTypes from 'prop-types';
import  { Container } from './styles'

const ColorPickerSquare = ({ color }) => {
  return (
    <Container>
      
    </Container>
  )
}

ColorPickerSquare.propTypes = {
    color: propTypes.string.isRequired
}

export default ColorPickerSquare;