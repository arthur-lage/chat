import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  color: #fff;
  margin-bottom: 3rem;
  letter-spacing: 0.05rem;
`;

export const Section = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 2.5rem;
`;

export const Image = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  box-shadow: 0px 0px 2.5px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const NewRandomAvatar = styled.button`
  border: 0;
  background: #1363df;
  filter: brightness(1.1);
  color: #fff;
  width: 30rem;
  transition: 0.2s ease;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 0.4rem;
  padding: 1rem;

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.025);
  }
`;

export const InputField = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.7rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.7rem;
  width: 100%;
  height: 4.5rem;
  outline: none;
  border: 2px solid #1363df;
  transition: 0.15s ease;

  &:focus {
    border-color: #1363df;
  }

  &::placeholder {
    color: #3a4f5d;
  }
`;

export const SaveChangesButton = styled.button`
  border: 0;
  background: #1363df;
  filter: brightness(1.1);
  color: #fff;
  margin-top: 3rem;
  transition: 0.2s ease;
  font-weight: 500;
  width: 30rem;
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 0.4rem;
  padding: 1rem;

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.025);
  }
`;
