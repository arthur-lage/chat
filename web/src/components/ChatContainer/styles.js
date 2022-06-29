import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr 5rem;
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
  padding-left: 2rem;
  padding-top: 1rem;
  overflow-y: scroll;
`;

export const InputField = styled.div`
  padding: 0.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 100%;
  grid-area: input;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid #453f78;
  background: #645f91;
  color: #fff;
  outline: none;
  border-radius: 0.4rem;
`;

export const SendMessage = styled.button`
  cursor: pointer;
  background: transparent;
  color: #fff;
  padding: 0.25rem;
  border: 0;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;

  &.sender {
    justify-content: flex-end;
    
    span {
      background: #324376;
    }
  }

  &.receiver {
    justify-content: flex-start;

    span {
      background: #1e2742;
    }
  }

  span {
    padding: 1rem;
    color: #fff;
    width: max-content;
    font-size: 1.6rem;
  }
`;
