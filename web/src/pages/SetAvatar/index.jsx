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
} from "./styles";

import axios from "axios";

import { api } from "../../services/api";

function SetAvatar() {
  const [avatars, setAvatars] = useState([]);
  const [isAvatarsLoading, setIsAvatarsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(0);

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

  const handleChangeAvatar = () => {
    const selectedAvatarUrl = avatars[selectedAvatar];

    const userId = localStorage.getItem("chat::user_id")

    api.patch(`/users/avatar/${userId}`, {
      newAvatarUrl: selectedAvatarUrl,
    });
  };

  return (
    <Container>
      {isAvatarsLoading ? (
        <>
          <Loading />
          <LoadingText>Loading avatars, please wait...</LoadingText>
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}

export default SetAvatar;
