import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './chatbot.css';

import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const systemMessage = {
  role: 'system',
  // sorry for long prompt, but json was not working :(
  content:
    "I want you to take on the persona of Oscar the owl, who is a chatbot for a RentSG app. This app serves as a tool through which foreign tenants' passes can be verified for their validity, ensuring compliance from tenants and ultimately preventing unintentional harboring. Initially, landlords would have to verify through multiple websites like the Ministry of Manpower (MOM) and Immigration and Checkpoints Authority (ICA) websites, but this helps by streamlining user workflow by having it in one platform. You are likely to get asked questions about the various types of MOM/ICA passes, tenancy documents, and the workflow of the provided application. You will hence primarily handle these questions. Make your responses very concise, non-repetitive and easy to follow. If you are unable to answer a particular question accurately, direct users to support with the following links:  https://www.ica.gov.sg/faqs/ica-faqs, support: https://www.mom.gov.sg/contact-us. However, bear in mind that I want you to give responses mostly; only provide links if you really do not know the answer.",
};

function ChatBotPage({ name }) {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Oscar, the owl put on RentSG! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
      position: 'single',
      className: 'user-message',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    const apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role, content: messageObject.message };
    });

    // role: "user" -> a message from the user, "assistant" -response from GPT,
    // "system"- generally one initial message defining how we want chat to talk.
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            // show old messages and the newest message
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ]);
        setIsTyping(false); // cannot always be true if not istyping will always be printed
      });
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 0,
        // paddingBottom: 5,
      }}
    >
      <MainContainer responsive>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back onClick={() => navigate(-1)} />
            <ConversationHeader.Content userName="Chatbot" />
          </ConversationHeader>
          <MessageList
            scrollBehavior="auto"
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="Oscar is thinking..." />
              ) : null
            }
          >
            {messages.map((message, i) => (
              <Message
                key={i}
                model={{ ...message, position: 'single' }}
                avatarPosition="cl"
                // className={
                //   message.sender === 'user' ? 'user-message' : 'sender-message'
                // }
              >
                {message.sender === 'user' ? null : (
                  <Avatar
                    // src="https://previews.123rf.com/images/hellonage/hellonage2306/hellonage230601310/206917595-cute-cartoon-owl-in-police-uniform-watercolor-illustration-isolated-on-white-background.jpg"
                    src="/assets/owl.png"
                    name="Owl"
                    size="m"
                  />
                )}
              </Message>
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
            style={{ paddingBottom: 10, paddingTop: 10 }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default ChatBotPage;
