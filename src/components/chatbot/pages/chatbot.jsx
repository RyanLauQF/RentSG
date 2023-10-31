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
  content:
    "Act as a chatbot for a web application named 'RentSG'. You only need to navigate to this website to use the app. You will take on the persona of Oscar the Owl. You will be asked questions about the various types of Singapore's Minitry of Manpower (MOM) / Immigration Checkpoint Authority (ICA) passes, tenancy documents, and the workflow of the provided application. Make your responses CONCISE, NON-REPETITVE and EASY-TO-FOLLOW. If you are unable to answer a particular question confidently or the questions are irrelevant, direct users to support with the following links:  https://www.ica.gov.sg/faqs/ica-faqs, support: https://www.mom.gov.sg/contact-us. However, I want you to give responses mostly; only provide links if you really do not know the answer.",
};

const applicationStructPrompt = `{
  "appStructure": {
    "ownerPage": {
      "title": "Homeowner View",
      "description": "Home view for homeowners when they log in. It provides an overview of which tenants are registered to the tenant residences. On the bottom navigation bar, they can toggle between home page and profile page. There is a chatbot access button on the bottom right corner.",
      "functions": {
        "owner_profile": {
          "title": "Owner Profile",
          "description": "Located in home owner profile page. Contains owner details including: Name, NRIC, Next-of-kin (NOK) name and contact information of NOK. It will also display the details of the owner residences, type of residence and number of rooms available to rent."
        },
        "tenant_profile": {
          "title": "Tenant Profile",
          "description": "Located in owner home page. Contains tenant details including: Name, Masked FIN number, pass expiry, lease expiry and contact number. It also contains a 2 buttons at the bottom which allows owners to delete tenants and view their tenancy contract agreements."
        },
        "add_tenant": {
          "title": "Add Tenant",
          "description": "Located in owner home page. THIS is a KEY feature of the application. Owner must ask tenants to navigate to their profile pages and then scan the QR code. After scanning their QR code, owners will have to carry out facial scanning of tenants to verify them and their details. They will then be required to verify tenant details approve the tenant. Once approved, the tenant will be registered to the owner residence."
        },
        "chatbot_function": {
          "title": "Chatbot Function",
          "description": "Located in chatbot page. Provides users access to the chatbot to ask questions regarding the application."
        }
      }
    },
    "tenantPage": {
      "title": "Tenant View",
      "description": "View for tenant when they log into the application. On the bottom navigation bar, they can toggle between home page and profile page. There is a chatbot access button on the bottom right corner.",
      "functions": {
        "tenant_profile": {
          "title": "Tenant Profile",
          "description": "Located in tenant profile page. Contains tenant personal details including: Name, FIN Number, Face image, Nationality, Pass Expiry, Contact Number. MOST IMPORTANTLY, it also has a QR code which is used in the process for homeowner to register tenants to their residences."
        },
        "pass_status": {
          "title": "Pass Status",
          "description": "Located in top of tenant home page. Indicates whether their work pass is still valid. It will be green if valid and red if not."
        },
        "residence_status": {
          "title": "Residence Status",
          "description": "Located in tenant home page. Displays information of which residence tenants belong to. It shows the residence address, the end of lease date and number of days left for the tenant to stay in the residence."
        },
        "chatbot_function": {
          "title": "Chatbot Function",
          "description": "Located in chatbot page. Provides users access to the chatbot to ask questions regarding the application."
        }
      }
    }
  }
}
`;

const assistantMessage = {
  role: 'assistant',
  content: `This app serves as a tool through which foreign tenants' passes can be verified for their validity, ensuring compliance from tenants and ultimately preventing unintentional harboring by streamlining user workflow by having it in one platform. Here is information on the application structure in a JSON format: ${applicationStructPrompt}.`,
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
      messages: [systemMessage, assistantMessage, ...apiMessages],
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
            style={{ paddingRight: 1, paddingLeft: 3 }}
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
