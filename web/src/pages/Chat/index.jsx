import React, { useEffect, useRef, useState } from "react";

import { Container, ChatWrapper, Main } from "./styles";

import { ContactList } from "../../components/ContactList";
import { ChatContainer } from "../../components/ChatContainer";
import { WelcomeToChat } from "../../components/WelcomeToChat";

import { api } from "../../services/api";

import { ChatSidebar } from "../../components/ChatSidebar";

import { useAuth } from "../../hooks/useAuth";
import { io } from "socket.io-client";
import { ProfileTab } from "../../components/ProfileTab";

function Chat() {
  const socket = useRef();

  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);

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

  function handleChangeCurrentTab(newTab) {
    setCurrentTab(newTab);
  }

  return (
    <Container>
      <ChatSidebar
        currentTab={currentTab}
        changeCurrentTab={handleChangeCurrentTab}
      />
      <ChatWrapper>
        <Main>
          {currentTab === 0 && (
            <>
              <ContactList changeChat={handleChangeChat} contacts={contacts} />
              {currentChat ? (
                <ChatContainer socket={socket} currentChat={currentChat} />
              ) : (
                <WelcomeToChat />
              )}
            </>
          )}

          {currentTab === 2 && (
            <>
              <ProfileTab />
            </>
          )}
        </Main>
      </ChatWrapper>
    </Container>
  );
}

export { Chat };
