import React, { useEffect, useRef, useState } from "react";

import { Container, ChatWrapper, LinkEl, Logo, Header, Main } from "./styles";

import { ContactList } from "../../components/ContactList";
import { ChatContainer } from "../../components/ChatContainer";
import { WelcomeToChat } from "../../components/WelcomeToChat";

import { api } from "../../services/api";

import { Power } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";
import { io } from "socket.io-client";

function Chat() {
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const { currentUser, setCurrentUser, handleChangeToken } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/users");

      setContacts(res.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:4000");
      socket.current.emit("add-user", currentUser.id);
    }
  }, [currentUser]);

  function handleChangeChat(newChat) {
    setCurrentChat(newChat);
  }

  function handleLogout() {
    handleChangeToken("");
    setCurrentUser(null);
  }

  return (
    <Container>
      <ChatWrapper>
        <Header>
          <Logo>Chat</Logo>
          <LinkEl onClick={handleLogout} to="/login">
            <Power size={42} />
          </LinkEl>
        </Header>
        <Main>
          <ContactList changeChat={handleChangeChat} contacts={contacts} />
          {currentChat ? (
            <ChatContainer socket={socket} currentChat={currentChat} />
          ) : (
            <WelcomeToChat />
          )}
        </Main>
      </ChatWrapper>
    </Container>
  );
}

export { Chat };
