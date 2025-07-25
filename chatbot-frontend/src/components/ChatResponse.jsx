import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ChatResponse = ({ response }) => {
    if (!response) return null;

    // Safely extract the text from the response object
    const answer =
        response.candidates &&
            response.candidates[0]?.content?.parts &&
            response.candidates[0].content.parts[0]?.text
            ? response.candidates[0].content.parts[0].text
            : 'No answer found.';

    return (
        <Box sx={{ mt: 3 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="subtitle1" color="text.secondary">
                    Response:
                </Typography>
                <Typography variant="body1">{answer}</Typography>
            </Paper>
        </Box>
    );
};

export default ChatResponse;