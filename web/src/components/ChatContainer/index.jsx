import { useEffect, useRef, useState } from "react";

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
  MessageContentWrapper,
  MessageText,
  MessageTime,
  NoMessagesWarning,
} from "./styles";

import { PaperPlaneTilt } from "phosphor-react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/useAuth";

import { v4 as uuidv4 } from "uuid";

export function ChatContainer({ currentChat, socket }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const { currentUser } = useAuth();

  const scrollRef = useRef();

  function sendMessageByPressingEnter(e) {
    const messageInputEl = document.querySelector("#message-input");

    if (e.key == "Enter") {
      if (document.activeElement === messageInputEl) {
        handleSetMessage();
      }
    }
  }

  async function handleSetMessage() {
    const messageInputEl = document.querySelector("#message-input");

    messageInputEl.focus();

    if (currentMessage.length == 0) {
      return;
    }

    await api.post(`/messages/${currentChat._id}`, {
      message: currentMessage,
    });

    socket.current.emit("send-message", {
      id: uuidv4(),
      senderId: currentUser.id,
      receiverId: currentChat._id,
      message: currentMessage,
      createdAt: new Date(),
    });

    const msgs = [...messages];

    msgs.push({
      id: uuidv4(),
      senderId: currentUser.id,
      receiverId: currentChat._id,
      message: currentMessage,
      createdAt: new Date(),
    });

    setMessages(msgs);

    setCurrentMessage("");
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on("receive-message", (msg) => {
        setArrivalMessage({
          id: msg.id,
          senderId: msg.senderId,
          receiverId: msg.receiverId,
          message: msg.message,
          createdAt: msg.createdAt,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    if (currentChat) {
      async function fetchData() {
        const res = await api.get(`/messages/${currentChat._id}`);

        setMessages(res.data);
      }

      fetchData();
    }
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({});
    // scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <Header>
        <ContactImage src={currentChat.avatarUrl} />
        <ContactName>@{currentChat.username}</ContactName>
      </Header>

      <Messages>
        {messages.length > 0 ? (
          <>
            {messages.map((message) => {
              const messageDate = new Date(message.createdAt);
              let messageHours = messageDate.getHours();
              let messageMinutes = messageDate.getMinutes();

              messageHours =
                messageHours < 10 ? `0${messageHours}` : messageHours;
              messageMinutes =
                messageMinutes < 10 ? `0${messageMinutes}` : messageMinutes;

              const time = `${messageHours}:${messageMinutes}`;

              return (
                <Message
                  className={
                    message.senderId === currentUser.id ? "sender" : "receiver"
                  }
                  ref={scrollRef}
                  key={message._id ? message._id : message.id}
                >
                  <MessageContentWrapper className="messageContent">
                    <MessageText>{message.message}</MessageText>

                    <MessageTime>{time}</MessageTime>
                  </MessageContentWrapper>
                </Message>
              );
            })}
          </>
        ) : (
          <NoMessagesWarning>
            <span>
              There are no messages between you and @{currentChat.username} yet!
            </span>
          </NoMessagesWarning>
        )}
      </Messages>

      <InputField>
        <MessageInput
          type="text"
          autoComplete="off"
          id="message-input"
          value={currentMessage}
          placeholder="Type your message..."
          onKeyDown={sendMessageByPressingEnter}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <SendMessage onClick={handleSetMessage}>
          <PaperPlaneTilt weight="light" size={36} />
        </SendMessage>
      </InputField>
    </Container>
  );
}
