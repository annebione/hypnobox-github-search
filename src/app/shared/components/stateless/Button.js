import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
   width: 200px;
   height: 60px;
   margin: 10px 0;
   margin: 0 auto;
   font-size: 20px;
   background-color: ${props => props.backgroundColor};
   color: ${props => props.color};
   border-radius: 3px;
   cursor: pointer;
   &:disabled {
       background-color: #dddd;
   }
   &:active {
    background-color:#423865;
   }
}
`

const Button = ({ children, color, backgroundColor, onClick, isDisabled, }) => (
    <StyledButton color = {color} 
        backgroundColor = {backgroundColor} 
        onClick={onClick}
        disabled = {isDisabled}>
        { children }
    </StyledButton>
 )

export default Button

