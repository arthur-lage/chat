import { useState } from "react";

import {
  Container,
  Header,
  ContactImage,
  ContactName,
  Messages,
  MessageInput,
  InputField,
  SendMessage,
} from "./styles";

import { PaperPlaneTilt } from "phosphor-react";

export function ChatContainer({ currentChat }) {
  const [currentMessage, setCurrentMessage] = useState("");

  return (
    <Container>
      <Header>
        <ContactImage src={currentChat.avatarUrl} />
        <ContactName>{currentChat.username}</ContactName>
      </Header>

      <Messages></Messages>

      <InputField>
        <MessageInput
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <SendMessage>
          <PaperPlaneTilt size={32} />
        </SendMessage>
      </InputField>
    </Container>
  );
}
