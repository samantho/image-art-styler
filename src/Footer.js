import { Box, Button, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box sx={{ height: '100px', width: '100vw', position: 'fixed', left: 0, bottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">Want to create your own custom image?</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ m: 1 }}>Download Python Notebook</Button>
            </div>
        </Box>
    );
};