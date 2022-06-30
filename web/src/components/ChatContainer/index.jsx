import { useEffect, useState } from "react";

import {
  Container,
  Header,
  ContactImage,
  ContactName,
  Messages,
  MessageInput,
  InputField,
  SendMessage,
  Message,
} from "./styles";

import { PaperPlaneTilt } from "phosphor-react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/useAuth";

export function ChatContainer({ currentChat }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { currentUser } = useAuth();

  async function handleSetMessage() {
    await api.post(`/messages/${currentChat._id}`, {
      message: currentMessage,
    });

    setCurrentMessage("");
  }

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`/messages/${currentChat._id}`);

      setMessages(res.data);
    }

    fetchData();
  }, [currentChat]);

  return (
    <Container>
      <Header>
        <ContactImage src={currentChat.avatarUrl} />
        <ContactName>{currentChat.username}</ContactName>
      </Header>

      <Messages>
        {messages.length > 0 ? (
          <>
            {messages.map((message) => (
              <Message
                className={
                  message.senderId === currentUser._id ? "sender" : "receiver"
                }
                key={message._id}
              >
                <span>{message.message}</span>
                <small>{message.createdAt}</small>
              </Message>
            ))}
          </>
        ) : (
          <h2>No messages</h2>
        )}
      </Messages>

      <InputField>
        <MessageInput
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <SendMessage onClick={handleSetMessage}>
          <PaperPlaneTilt weight="light" size={36} />
        </SendMessage>
      </InputField>
    </Container>
  );
}
