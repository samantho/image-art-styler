import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Footer } from "./Footer.js";
import background from "./canvas-texture.jpeg";

function App() {
  const content_urls = [
    "https://bloximages.newyork1.vip.townnews.com/greensboro.com/content/tncms/assets/v3/editorial/0/6b/06b4d451-6b34-5c97-b616-e41007ce918c/5c39084957d03.image.jpg?crop=1211%2C1211%2C250%2C0&resize=1211%2C1211&order=crop%2Cresize",
    "https://static.scientificamerican.com/blogs/cache/file/1D4440C5-CD59-4A53-A23648FF2C7CD0DD_source.jpg?w=590&h=800&B9BBE026-DB91-4291-B39DC8D859778498",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-movies-in-order-index-1631199371.jpeg?crop=0.565xw:1.00xh;0.435xw,0&resize=640:*",
    "https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/unc-ch-rameses-and-rj-orange-cat-art.jpg?&targetx=0&targety=-15&imagewidth=700&imageheight=530&modelwidth=700&modelheight=500&backgroundcolor=A8A59B&orientation=0",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Bell_tower_in_Chapel_Hill_%28cropped%29.jpg",
  ];
  const style_urls = [
    "https://i.pinimg.com/564x/b6/f4/a0/b6f4a01ddc7d82eff528915c2247207d.jpg",
    "https://media.sanctuarymentalhealth.org/wp-content/uploads/2021/03/04151535/The-Starry-Night.jpg",
    "https://pixfeeds.com/images/arts/1280-689521286-visualization-of-inner-paint.jpg",
    "https://www.artranked.com/images/16/1600461a08e47fec9d58fc3fbb379d90.jpeg",
  ];

  const [content, setContent] = useState(-1);
  const [style, setStyle] = useState(-1);


  const handleClickContent = (id) => {
    setContent(id);
  };

  const handleClickStyle = (id) => {
    setStyle(id);
  };

  const handleRestart = () => {
    setContent(-1);
    setStyle(-1);
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', backgroundImage: `url(${background})` }}>
      <Typography align="center" variant="h3" sx={{ padding: 2 }}>Image Art Styler</Typography>
      {content == -1 ?
        <React.Fragment>
          <Typography align="center" variant="h6">Select an image</Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {content_urls.map((url, i) => <img style={{ margin: 6 }} height="200px" className="img" key={i} src={url} onClick={() => handleClickContent(i)} />)}
          </div>
        </React.Fragment>
        : style == -1 ?
          <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ margin: 6 }} height="200px" src={content_urls[content]} />
            </div>
            <Typography align="center" variant="h6">Select a style</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {style_urls.map((url, i) => <img style={{ margin: 6 }} height="200px" className="img" key={i} src={url} onClick={() => handleClickStyle(i)} />)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ m: 2 }} onClick={() => setContent(-1)}>Back</Button>
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ margin: 6 }} height="200px" src={content_urls[content]} />
              <img style={{ margin: 6 }} height="200px" src={style_urls[style]} />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ m: 2 }} onClick={handleRestart}>Start Over</Button>
            </div>
          </React.Fragment>
      }
      <Footer />
    </Box>
  );
}

export default App;
