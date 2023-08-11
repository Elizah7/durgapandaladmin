import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Input,
  Button,
  Text,
  Avatar,
  Stack,
  Badge,
  CSSReset,
} from '@chakra-ui/react';
import Navbar from './navbar';

const ChatMessage = ({ message, isUser }) => {
  return (
    <Flex direction={isUser ? 'row-reverse' : 'row'} mt={2}>
      {!isUser && (
        <Avatar
          size="sm"
          src="https://via.placeholder.com/30"
          alt="Chatbot Avatar"
          mr={2}
        />
      )}
      <Box
        px={4}
        py={2}
        rounded="lg"
        maxW="70%"
        bg={isUser ? 'red' : 'black'}
        color={isUser ? 'black' : 'black'}
      >
        <Text>{message}</Text>
      </Box>
    </Flex>
  );
};

const ChatbotUI = () => {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true },
      ]);

      // Replace this part with your logic to get the chatbot response
      // For example:
      // - You can use an API call to a chatbot service to get the response.
      // - Or, you can use a custom logic to generate chatbot responses.
      // For this example, let's just use a simple hardcoded response.
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'I am Chatbot, how can I assist you?', isUser: false },
        ]);
      }, 1000);

      setInputValue('');
    }
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar/>
      <Flex
        direction="column"
        bg="rgb(253, 141, 20)"
        rounded="lg"
        p={4}
        maxW="500px"
        mx="auto"
        my={8}
        boxShadow="lg"
        height={['80vh', '50vh', '60vh']} // Height based on screen size
        overflowY="auto" // Make the chat window scrollable
      >
        <Box flex="1" overflow="auto">
          <Stack spacing={3}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
            ))}
          </Stack>
        </Box>
        <Flex mt={4}>
          <Input
            flex="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            size="sm"
            rounded="full"
            bg="black"
          />
          <Button bg="green" ml={2} size="sm" rounded="full" onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ChatbotUI;
