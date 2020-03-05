import styled from 'styled-components';


export const Square = styled.div`

    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.radius}px;
    background: ${props => props.color};
    box-shadow: ${props => `${props.distance}px ${props.distance}px ${props.blur}px ${props.lighterColor}, 
             -${props.distance}px -${props.distance}px ${props.blur}px ${props.darkerColor};`}
`