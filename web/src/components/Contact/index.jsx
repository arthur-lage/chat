import React from "react";

import { Container, ContactImage, ContactName } from "./styles";

export function Contact({ changeChat, contact }) {
  return (
    <Container onClick={() => changeChat(contact)}>
      <ContactImage src={contact.avatarUrl} />
      <ContactName>{contact.username}</ContactName>
    </Container>
  );
}
