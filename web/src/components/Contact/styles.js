import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: #3b429f;
  transition: 0.2s ease;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ContactImage = styled.img`
  border-radius: 50%;
  width: 6.4rem;
  height: 6.4rem;
`;

export const ContactName = styled.span`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 500;
`;
