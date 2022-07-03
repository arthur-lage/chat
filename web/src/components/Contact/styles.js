import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #1363DF;
  transition: 0.2s ease;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ContactImage = styled.img`
  border-radius: 50%;
  width: 5.4rem;
  height: 5.4rem;
  margin-right: 1.5rem;
  box-shadow: 0px 0px 2px 5px rgba(0, 0, 0, 0.2);

`;

export const ContactName = styled.span`
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
`;
