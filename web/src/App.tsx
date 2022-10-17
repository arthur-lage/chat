import { FormEvent, useState } from "react";

export interface IMessage {
  id: string;
  message: string;
}

export function App() {
  const [messages, setMessages] = useState<IMessage[] | []>([
    {
      id: "Usuario1",
      message: "ola",
    },
    {
      id: "Usuario2",
      message: "ola usuario 1",
    },
    {
      id: "Usuario1",
      message: "tudo bem?",
    },
    {
      id: "Usuario2",
      message: "tudo sim, e com voce?",
    },
    {
      id: "Usuario1",
      message: "bem tambem, obrigado!",
    },
  ]);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    alert(message);
  };

  return (
    <div>
      <h1>Chat</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "25px",
        }}
      >
        <h2>Messages</h2>

        <div>
          {messages.map((message) => (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "25px",
              }}
            >
              <p>User: {message.id}</p>
              <p>Message: {message.message}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSendMessage}>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
