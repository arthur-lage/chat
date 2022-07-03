import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 75vh;
  width: 20vw;
  max-width: 25vw;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background: #3b3841;
  border-radius: 0.6rem 0 0.6rem 0.6rem;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`;
