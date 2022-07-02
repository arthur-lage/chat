import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #161517;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7.5rem;
  margin-left: 12.5rem;
  animation: fade 1s forwards ease-out;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  letter-spacing: 0.12rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  color: #fff;
`;

export const Subtitle = styled.h2`
  font-size: 2.6rem;
  letter-spacing: 0.2rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
  color: #fff;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60vw;
`;

export const InputField = styled.div`
  width: 40vw;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.04rem;
`;

export const Input = styled.input`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.7rem;
  width: 100%;
  height: 5.5rem;
  outline: none;
  border: 2px solid #02735E;
  transition: 0.15s ease;

  &:focus {
    border-color: #0DA085;
  }

  &::placeholder {
    color: #3a4f5d;
  }
`;

export const LoginButton = styled.button`
  transition: 0.2s ease;
  width: 12.5rem;
  height: 5.5rem;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 2rem;
  border: 0;
  letter-spacing: 0.05rem;
  background: #02735E;
  font-weight: 500;
  font-size: 1.9rem;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const LinkToRegister = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  margin-top: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginForm = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Illustration = styled.img`
  width: 50rem;
  position:relative ;
  right: 20rem;
`;
