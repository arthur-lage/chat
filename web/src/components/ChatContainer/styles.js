import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr 8rem;
  grid-template-areas:
    "header"
    "messages"
    "input";
`;

export const Header = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  grid-area: header;
`;

export const ContactImage = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const ContactName = styled.span`
  font-size: 1.8rem;
  color: #fff;
`;

export const Messages = styled.div`
  grid-area: messages;
`;

export const InputField = styled.div``;

export const MessageInput = styled.input`
  grid-area: input;
`;

export const SendMessage = styled.button``;
