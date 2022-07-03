import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  min-height: 100vh;
  background: #161517;
`;

export const SetAvatarWrapper = styled.div`
  animation: fade 1s forwards ease-out;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #fff;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const Avatar = styled.div`
  width: 17.5rem;
  height: 17.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;

  &.selected {
    border: 6px solid white;
    padding: 0.5rem;
  }
`;

export const AvatarImage = styled.img`
  transition: 0.2s ease;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`;

export const SelectAvatar = styled.button`
  color: #fff;
  margin-top: 4rem;
  background: #344966;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-weight: 700;
  border-radius: 10px;
  font-size: 1.7rem;
  padding: 1.75rem 1rem;
  width: 30rem;
  cursor: pointer;
  border: 0;
  transition: 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Loading = styled.div`
  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0.15);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  width: 6.4rem;
  height: 6.4rem;
  background: #fff;
  border-radius: 50%;
  animation: pulse 0.85s infinite linear;
`;

export const LoadingText = styled.span`
  font-size: 2rem;
  color: #fff;
`;
