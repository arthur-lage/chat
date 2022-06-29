import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191919;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
`;

export const Logo = styled.h2`
  font-size: 3.2rem;
  color: #fff;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Main = styled.main`
  display: flex;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  background: #2d253b;
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
