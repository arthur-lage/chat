import React, { useEffect, useState } from "react";

import {
  Container,
  Title,
  AvatarWrapper,
  Avatar,
  AvatarImage,
  SelectAvatar,
  Loading,
  LoadingText,
  SetAvatarWrapper
} from "./styles";

import axios from "axios";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

function SetAvatar() {
  const [avatars, setAvatars] = useState([]);
  const [isAvatarsLoading, setIsAvatarsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = [];

      for (let i = 0; i < 4; i++) {
        let res = await axios.get(`https://dog.ceo/api/breeds/image/random`);

        let imageUrl = res.data.message;

        while (data.find((image) => image == imageUrl)) {
          res = await axios.get(`https://dog.ceo/api/breeds/image/random`);

          imageUrl = res.data.message;
        }

        data.push(imageUrl);
      }

      setAvatars(data);
      setIsAvatarsLoading(false);
    }

    fetchData();
  }, []);

  const handleChangeAvatar = async () => {
    const selectedAvatarUrl = avatars[selectedAvatar];

    await api.patch(`/users/avatar`, {
      newAvatarUrl: selectedAvatarUrl,
    });

    navigate("/chat");
  };

  return (
    <Container>
      {isAvatarsLoading ? (
        <>
          <Loading />
          <LoadingText>Loading avatars, please wait...</LoadingText>
        </>
      ) : (
        <SetAvatarWrapper>
          <Title>Choose your avatar</Title>

          <AvatarWrapper>
            {avatars.map((avatar, key) => (
              <Avatar
                className={selectedAvatar === key ? "selected" : ""}
                onClick={() => setSelectedAvatar(key)}
                key={key}
              >
                <AvatarImage src={`${avatar}`} />
              </Avatar>
            ))}
          </AvatarWrapper>

          <SelectAvatar onClick={handleChangeAvatar}>
            Select Avatar
          </SelectAvatar>
        </SetAvatarWrapper>
      )}
    </Container>
  );
}

export default SetAvatar;
