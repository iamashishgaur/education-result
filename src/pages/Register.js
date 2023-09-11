import React from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RegisterForm = styled.div`
  border: 2px solid gray;
  width: 350px;
  height: 400px;
  & > h1 {
    text-align: center;
  }
`;
const InputForm = styled.div`
  margin-top: 2rem;
`;
const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm>
        <h1>Register Form</h1>
        <InputForm>
          <label>Name:</label><br/>
          <input type="text" name="name" placeholder="Name" required />
          <label>Email:</label><br/>
          <input type="email" name="email" placeholder="Name" required />
          <label>Password:</label><br/>
          <input type="password" name="password" placeholder="Name" required />
        </InputForm>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
