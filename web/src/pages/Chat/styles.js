import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #161517;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
`;

export const Main = styled.main`
  display: flex;
  padding: 1rem;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  background: #2b292b;
  height: 100%;
`;

export const LinkEl = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  &:hover {
    background: #3b429f;
  }
`;
