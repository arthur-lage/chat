import React from "react";
import { useState } from "react";
import {
  validateName,
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validators";

import {
  Container,
  FormWrapper,
  Title,
  Form,
  InputField,
  Input,
  LoginButton,
  Label,
  OneRowInput,
  Illustration,
  LinkToRegister,
  Subtitle,
  RegisterForm,
} from "./styles";

import IllustrationImage from "../../assets/chat-illustration-1.svg";

import { ToastContainer, toast } from "react-toastify";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { handleChangeToken } = useAuth();

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
    const isNameValid = validateName(name);
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(
      password,
      confirmPassword
    );

    if (
      isNameValid &&
      isUsernameValid &&
      isConfirmPasswordValid &&
      isEmailValid &&
      isPasswordValid
    ) {
      return true;
    } else {
      if (!isNameValid) {
        toast.error("Invalid name.", toastOptions);
      }

      if (!isUsernameValid) {
        toast.error(
          "Invalid username. Make sure it has at least 5 characters.",
          toastOptions
        );
      }

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

      if (!isConfirmPasswordValid) {
        toast.error("Passwords do not match", toastOptions);
      }

      return false;
    }
  }

  function submitForm() {
    api
      .post("/users", {
        name,
        username,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        toast.success("User created successfully.", toastOptions);

        handleChangeToken(res.data.token);
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions);
        console.log(err);
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
        <RegisterForm>
          <Title>Chat</Title>
          <Subtitle>Register</Subtitle>
          <Form>
            <OneRowInput>
              <InputField className="input-field">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  type="text"
                  placeholder="Type your name..."
                />
              </InputField>
              <InputField className="input-field">
                <Label htmlFor="username">Username</Label>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="username"
                  type="text"
                  placeholder="Type your username..."
                />
              </InputField>
            </OneRowInput>
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
            <OneRowInput>
              <InputField className="input-field">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  type="password"
                  placeholder="Type your password..."
                />
              </InputField>
              <InputField className="input-field">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password..."
                />
              </InputField>
            </OneRowInput>

            <LoginButton type="submit" onClick={handleForm}>
              Register
            </LoginButton>

            <LinkToRegister to="/login">
              Already have an account? Login
            </LinkToRegister>
          </Form>
        </RegisterForm>
        <Illustration src={IllustrationImage} />
      </FormWrapper>

      <ToastContainer />
    </Container>
  );
}

export { Register };
