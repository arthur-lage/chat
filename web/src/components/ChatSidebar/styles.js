import styled from "styled-components";

export const Container = styled.div`
  min-width: 6rem;
  height: 90vh;
  border-radius: 0.4rem;
  background: #3b3841;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.7rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const NavButton = styled.button`
  color: #fff;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 0;

  &:hover {
    background: #1363df;
  }

  &.active {
    background: #1363df;
  }
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  color: #fff;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 0;

  &:hover {
    background: #1363df;
  }
`;
