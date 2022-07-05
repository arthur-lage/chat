import React, { useState } from "react";

import {
  Container,
  AvatarWrapper,
  Image,
  NewRandomAvatar,
  InputField,
  Label,
  Input,
  SaveChangesButton,
  Form,
  Title,
  Section,
  SectionTitle,
} from "./styles";

import { useAuth } from "../../hooks/useAuth";

import { api } from "../../services/api";

import axios from "axios";

export function ProfileTab() {
  const { setCurrentUser, currentUser } = useAuth();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSaveChanges() {}

  async function handleNewRandomAvatar() {
    const newAvatarUrl = await axios.get(
      `https://dog.ceo/api/breeds/image/random`
    );

    const newCurrentUser = {
      ...currentUser,
      avatarUrl: newAvatarUrl.data.message,
    };

    await api.patch(`/users/avatar`, {
      newAvatarUrl: newAvatarUrl.data.message,
    });

    setCurrentUser(newCurrentUser);
  }

  return (
    <Container>
      <Title>Profile</Title>
      <Section>
        <SectionTitle>Avatar</SectionTitle>
        <AvatarWrapper>
          <Image src={currentUser.avatarUrl} />
          <NewRandomAvatar onClick={handleNewRandomAvatar}>
            New random avatar
          </NewRandomAvatar>
        </AvatarWrapper>
      </Section>
      <Section>
        <SectionTitle>Information</SectionTitle>
        <Form>
          <InputField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              placeholder="Type a new name for your profile"
              onChange={(e) => setName(e.target.value)}
            />
          </InputField>
          <InputField>
            <Label htmlFor="username">Userame</Label>
            <Input
              type="text"
              id="username"
              value={username}
              placeholder="Type a new username for your profile"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputField>
          <InputField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Type a new email for your profile"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputField>
          <InputField>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="Type a new password for your profile"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputField>
          <InputField>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              placeholder="Confirm your new password for your profile"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputField>
          <SaveChangesButton onClick={handleSaveChanges}>
            Save Changes
          </SaveChangesButton>
        </Form>
      </Section>
    </Container>
  );
}
