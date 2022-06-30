import React from "react";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/validators";

import {
  Container,
  FormWrapper,
  Title,
  Form,
  InputField,
  Input,
  LoginButton,
  Label,
  LinkToRegister,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/useAuth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleChangeToken } = useAuth()

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  function validateForm() {
    const isEmailValid = validateEmail(email);

    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      return true;
    } else {
      if (!isEmailValid) {
        toast.error(
          'Invalid email. It should look like "example@example.com".',
          toastOptions
        );
      }

      if (!isPasswordValid) {
        toast.error(
          "Invalid password. Make sure it has at least 8 characters.",
          toastOptions
        );
      }

      return false;
    }
  }

  function submitForm() {
    api
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("User logged in successfully.", toastOptions);

        handleChangeToken(res.data.token);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleForm(e) {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      submitForm();
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <Form>
          <InputField>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              placeholder="Type your email..."
            />
          </InputField>
          <InputField>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              placeholder="Type your password..."
            />
          </InputField>

          <LoginButton onClick={handleForm} type="submit">
            Login
          </LoginButton>

          <LinkToRegister to="/register">
            Don't have an account yet? Create one
          </LinkToRegister>
        </Form>
      </FormWrapper>

      <ToastContainer />
    </Container>
  );
}

export { Login };
