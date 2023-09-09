import { ImageList, ImageListItem,ImageListItemBar } from "@mui/material";
import mil from "../../images/milpitas.png"
import front from "../../images/featured/front.jpg"
import one from "../../images/featured/1.jpg";
import two from "../../images/featured/2.jpg";
import three from "../../images/featured/3.jpg";
import four from "../../images/featured/4.jpg";
import five from "../../images/featured/5.jpg";
import six from "../../images/featured/six.jpg";
import seven from "../../images/featured/7.jpg";


const ImageBoard = () => {
    return (
        <ImageList variant="quilted" cols={4} rowHeight={250} sx={{width: '45vw', height: '65vh'}}>
            <ImageListItem cols={2} rows={2} >
                <ImageListItemBar title="Condominium Entrance"/>
                <img src={front} alt="condominum"></img>
            </ImageListItem>
            <ImageListItem>
            <ImageListItemBar title="Kitchen"/>
                <img src={one} alt="kitchen"></img>
            </ImageListItem>
            <ImageListItem>
            <ImageListItemBar title="Wall Decor"/>
                <img src={two} alt="wall"></img>
            </ImageListItem>
            <ImageListItem>
            <ImageListItemBar title="Living Room view 1"/>
                <img src={three} alt="living"></img>
            </ImageListItem>
            <ImageListItem>
            <ImageListItemBar title="Bathroom"/>
                <img src={seven} alt="bath"></img>
            </ImageListItem>
            <ImageListItem cols={2}>
            <ImageListItemBar title="Living Room view 2"/>
                <img src={five} alt="living2"></img>
            </ImageListItem>
            <ImageListItem cols={2} rows={2}>
            <ImageListItemBar title="Bedroom 1"/>
                <img src={six} alt="bed1"></img>
            </ImageListItem>
            <ImageListItem cols={2}>
            <ImageListItemBar title="Bedroom 2"/>
                <img src={four} alt="bed2"></img>
            </ImageListItem>
            
        </ImageList>
    )
}

export default ImageBoard;