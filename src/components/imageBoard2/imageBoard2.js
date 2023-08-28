import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "./imageBoard2.css"

const ImageGalleryItem = ({ imageSrc, cols, rows }) => (
  <ImageListItem cols={cols} rows={rows}>
    <img src={imageSrc}/>
  </ImageListItem>
);

const ImageBoard2 = ({ images }) => {
  return (
    <ImageList variant="quilted" cols={2} rowHeight={300} sx={{ width: '40vw', height: '40vh' }}>
      {images.map((image, index) => (
        <ImageGalleryItem key={index} imageSrc={image.src} cols={index == 0 ? 2 : 1}/>
      ))}
    </ImageList>
  );
};

export default ImageBoard2;
