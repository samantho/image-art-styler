import { Box, Button, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box sx={{ height: '110px', width: '100vw', pt: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">Want to create your own custom image?</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ m: 1 }}><a href="https://github.com/samantho/image-art-styler/blob/main/src/ImageArtStyler.ipynb" style={{ textDecoration: 'none', color: 'white' }} target="_blank">Download Python Notebook</a></Button>
            </div>
        </Box>
    );
};