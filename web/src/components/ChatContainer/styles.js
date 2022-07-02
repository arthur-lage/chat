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
  padding: 1rem 3rem;
  padding-top: 1rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 55vh;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
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

  &::placeholder {
    color: #fff;
  }
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

    .messageContent {
      background: #324376;

      &::after {
        content: "";
        position: absolute;

        top: 0;
        right: -1rem;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        border-left: 20px solid #324376;
      }
    }
  }

  &.receiver {
    justify-content: flex-start;

    .messageContent {
      background: #cc130f;

      &::after {
        content: "";
        position: absolute;

        top: 0;
        left: -1rem;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        border-right: 20px solid #cc130f;
      }
    }
  }
`;

export const MessageContentWrapper = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem;
  width: max-content;
  position: relative;
`;

export const MessageText = styled.span`
  color: #fff;
  font-size: 1.6rem;
  margin-right: 3rem;
`;

export const MessageTime = styled.span`
  font-size: 1.4rem;
  color: #eaeaea;
  position: absolute;
  bottom: 0.45rem;
  z-index: 1;
  right: 0.45rem;
`;
