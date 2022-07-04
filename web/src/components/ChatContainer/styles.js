import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr 6rem;
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
  background: #3b3841;
  border-radius: 0 0.6rem 0.6rem 0;
`;

export const ContactImage = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const ContactName = styled.span`
  font-size: 1.8rem;
  color: #fff;
`;

export const Messages = styled.div`
  grid-area: messages;
  padding: 1rem 3rem 2rem 3rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`;

export const InputField = styled.div`
  padding: 1rem 2rem 0.25rem 2rem;
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
  border: 2px solid transparent;
  background: #444;
  transition: 0.2s ease;
  color: #fff;
  outline: none;
  border-radius: 0.4rem;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    border-color: #1363df;
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
      background: #5534a5;

      &::after {
        content: "";
        position: absolute;

        top: 0;
        right: -1rem;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        border-left: 20px solid #5534a5;
      }
    }
  }

  &.receiver {
    justify-content: flex-start;

    .messageContent {
      background: #3560c4;

      &::after {
        content: "";
        position: absolute;

        top: 0;
        left: -1rem;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        border-right: 20px solid #3560c4;
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
  margin-right: 3.5rem;
`;

export const MessageTime = styled.span`
  font-size: 1.4rem;
  color: #eaeaea;
  opacity: 0.7;
  letter-spacing: 0.05rem;
  position: absolute;
  bottom: 0.45rem;
  z-index: 1;
  right: 0.45rem;
`;

export const NoMessagesWarning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100% ;
  flex: 1;

  span {
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
  }
`;
