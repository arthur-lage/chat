import React, { useEffect, useState } from "react";

import { Container, ChatWrapper, LinkEl, Logo, Header, Main } from "./styles";

import { ContactList } from "../../components/ContactList";
import { ChatContainer } from "../../components/ChatContainer";
import { WelcomeToChat } from "../../components/WelcomeToChat";

import { api } from "../../services/api";

import { Power } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";

function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const { setCurrentUser, handleChangeToken } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/users");

      setContacts(res.data);
    }

    fetchData();
  }, []);

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
            <ChatContainer currentChat={currentChat} />
          ) : (
            <WelcomeToChat />
          )}
        </Main>
      </ChatWrapper>
    </Container>
  );
}

export { Chat };
