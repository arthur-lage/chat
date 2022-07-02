import express from "express";

import { Auth } from "../middlewares/Auth.js";
import Message from "../models/Message.js";

const routes = express.Router();

routes.get("/:receiverId", Auth, async (req, res) => {
  try {
    const { id } = req.user;
    const { receiverId } = req.params;

    const messages = await Message.find({
      users: {
        $all: [id, receiverId],
      },
    }).sort({
      updatedAt: 1,
    });

    return res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.post("/:receiverId", Auth, async (req, res) => {
  try {
    const { id } = req.user;
    const { receiverId } = req.params;
    const { message } = req.body;

    if (id === receiverId)
      return res
        .status(400)
        .json({ message: "You can't send messages to yourself!" });

    const newMessage = {
      message,
      senderId: id,
      receiverId,
      users: [id, receiverId],
    };

    await Message.create(newMessage);

    return res.status(200).json({ message: "Message created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

export { routes };
