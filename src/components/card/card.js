
import { FaPlay, FaHeart, FaPause, FaRegHeart} from "react-icons/fa";

import {CardBody, CardFooter, Player} from './cardStyle';

const timeHandler = (duration) => {
   var rest = duration % (60*60);
   var minutes = Math.floor(duration/60);
   rest %= 60;
   const seconds = Math.ceil(rest);
   const format = minutes+":"+seconds;
   return format
}

export default function Card({song, addFavoriteHandler, removeFavoriteHandler, soundPlay, isPause}){
   return(
      <CardBody>
         <a href={song.link} target="_blank" rel="noreferrer">
         <div className="cardImage">
            <img className="albumImg" src={song.image} alt="capa album" />
            <span>Veja a música completa</span>
         </div>
         </a>
         <h3 className="title ">{song.title}</h3>
         <span className="duration">Duração: {timeHandler(song.duration)}</span>
         <p className="artistName">{song.singer}</p>
         
         <CardFooter>
            {!song.favorite && <FaRegHeart className="faEmptyHeart" id={"add"+song.id} onClick={() => addFavoriteHandler(song, song.id)}/>}
            <Player onClick={() => soundPlay(song.preview)}>
               {!isPause && <FaPlay className="icon"/>}
               <audio id="player">
                  <source src={song.preview} type="audio/mp3" />
               </audio>
               {isPause && <FaPause className="icon"/>}
            </Player>
            {song.favorite && <FaHeart className="faFullHeart" id={"rem"+song.id} onClick={() => removeFavoriteHandler(song.id)}/>}
         </CardFooter>
      </CardBody>
   )
}