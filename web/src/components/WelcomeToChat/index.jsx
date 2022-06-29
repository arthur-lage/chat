import { Container, Title, Text } from "./styles";

import { Chats } from "phosphor-react";

export function WelcomeToChat() {
  return (
    <Container>
      <Chats size={128} weight="light" color="#fff" />
      <Title>Welcome to Chat!</Title>
      <Text>To chat with someone, first you need choose a contact.</Text>
    </Container>
  );
}
