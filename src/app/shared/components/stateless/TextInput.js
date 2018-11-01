import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`

const Field = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`

const Error = styled.div`
  font-family: Open Sans;
  color: red;
  font-weight: 700;
`

const Input = styled.input`
  width: 80%;
  height: 60px;
  margin: 0;
  outline: none;
  padding: 0px 20px;
  border: 0;
  box-sizing: border-box;
  border-bottom: 2px solid #3ce8b0;
  box-shadow: none !important;
  font-size: 20px;
  color: #24292e !important;
  transition: 100ms linear border;
  &:focus {
    border: 2px solid #3ce8b0;
   }
`

const TextInput = ({name, onChange, placeholder, value, error}) => {

  return (
    <WrapperDiv>
      <Field>
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <Error>{error}</Error>}
      </Field>
    </WrapperDiv>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
