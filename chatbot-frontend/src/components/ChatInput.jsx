import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ChatInput = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <TextField
                label="Type your message"
                variant="outlined"
                fullWidth
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Enter your question here"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default ChatInput;