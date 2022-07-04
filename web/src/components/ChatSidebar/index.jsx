import React from "react";
import { Power, UserPlus, Users, User } from "phosphor-react";

import { Container, Nav, NavButton, LogoutButton } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function ChatSidebar({ currentTab, changeCurrentTab }) {
  const { handleChangeToken, setCurrentUser } = useAuth();

  function handleLogout() {
    handleChangeToken("");
    setCurrentUser(null);
  }

  return (
    <Container>
      <Nav>
        <NavButton
          title="Conversations"
          className={currentTab == 0 ? "active" : ""}
          onClick={() => changeCurrentTab(0)}
        >
          <Users weight="light" size={36} />
        </NavButton>
        <NavButton
          title="Add friends"
          className={currentTab == 1 ? "active" : ""}
          onClick={() => changeCurrentTab(1)}
        >
          <UserPlus weight="light" size={36} />
        </NavButton>
        <NavButton
          title="Profile"
          className={currentTab == 2 ? "active" : ""}
          onClick={() => changeCurrentTab(2)}
        >
          <User weight="light" size={36} />
        </NavButton>
      </Nav>
      <LogoutButton title="Log out" onClick={handleLogout}>
        <Power weight="light" size={42} />
      </LogoutButton>
    </Container>
  );
}
