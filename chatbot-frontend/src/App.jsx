import { useState } from 'react'
import ChatInput from './components/ChatInput.jsx'
import ChatResponse from './components/ChatResponse.jsx'
import { fetchChatResponse } from './services/api.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // MUI blue
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const chatResponse = await fetchChatResponse(question);
      setResponse(chatResponse);
      if (!chatResponse) {
        console.error("No response received from the server.");
        return;
      }
      if (!chatResponse.candidates || chatResponse.candidates.length === 0) {
        console.error("No candidates found in the response.");
        return;
      }
      if (!chatResponse.usageMetadata) {
        console.error("No usage metadata found in the response.");
        return;
      }
      if (!chatResponse.usageMetadata.promptTokenCount || !chatResponse.usageMetadata.candidatesTokenCount || !chatResponse.usageMetadata.totalTokenCount) {
        console.error("Incomplete usage metadata in the response.");
        return;
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            AI CHATBOT
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <ChatInput onSubmit={handleQuestionSubmit} />
            <ChatResponse response={response} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App
