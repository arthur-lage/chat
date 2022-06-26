import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #42378f;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  letter-spacing: 0.12rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  color: #fff;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40vw;
`;

export const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.04rem;
`;

export const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  border-radius: 4px;
  font-size: 1.6rem;
  width: 100%;
  outline: none;
  border: 2px solid #322372;
  transition: 0.15s ease;

  &:focus {
    border-color: #9b84ff;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  transition: 0.2s ease;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 2rem;
  border: 0;
  cursor: pointer;
  font-size: 1.8rem;
  letter-spacing: 0.05rem;
  font-weight: 500;
  background: #8063ff;
  border: 2px solid #322372;

  &:hover {
    background: #9b84ff;
  }
`;

export const LinkToRegister = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  margin-top: 1.5rem;
`;
