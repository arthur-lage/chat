import React from "react";

import { Contact } from "../Contact";
import { Container } from "./styles";

export function ContactList({ changeChat, contacts }) {
  return (
    <Container>
      {contacts.length > 0 ? (
        <>
          {contacts.map((contact) => (
            <Contact
              changeChat={changeChat}
              key={contact._id}
              contact={contact}
            />
          ))}
        </>
      ) : (
        <h2>No contacts</h2>
      )}
    </Container>
  );
}
