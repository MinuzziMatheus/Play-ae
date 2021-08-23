import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Card from '../card/card';
import { Container, Search, SearchContainer } from './listSongsStyle';

export default function ListSongs(){

   const [songs, setSongs] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [isPause, setIsPause] = useState(false);
   const [isFavorite, setIsFavorite] = useState(false);
   const [callFavoritePage, setCallFavoritePage] = useState(false);

   useEffect( () => {
      const fetchSongs = async () => {
      const response =  await fetch('/chart/tracks');
      const responseData = await response.json();
      const loadedSongs = [];
      for(const key in responseData.tracks.data) {
         loadedSongs.push({
            id: responseData.tracks.data[key].id,
            image:  responseData.tracks.data[key].album.cover,
            title: responseData.tracks.data[key].title,
            singer: responseData.tracks.data[key].artist.name,
            duration: responseData.tracks.data[key].duration,
            preview: responseData.tracks.data[key].preview,
            album: responseData.tracks.data[key].album.title,
            link: responseData.tracks.data[key].link,
            favorite: false
         });
      }
      setSongs(loadedSongs);
      }
      fetchSongs();
   }, []);

   const dispatch = useDispatch();

   const soundPlay = (src) => {
      const player = document.getElementById('player');
      player.src = src;
      if(!isPause){
         player.play();
         setIsPause(true);
      }else {
         player.pause();
         setIsPause(false);
      }
   }

   const removeFavoriteHandler = (song) => {
      dispatch({ type: 'REMOVE', song: song});
   }

   const addFavoriteHandler = (song) => {
      document.getElementById("add"+song.id).style.display = 'none';
      dispatch({ type: 'ADD', song: song});
   }

   // const teste = (song) => {
   //    if(isFavorite){
   //       setIsFavorite(song.favorite = false);
   //    }else {
   //       setIsFavorite(song.favorite = true);
   //    }
   // }

   function callFavoritePageHandle(){
      setCallFavoritePage(!callFavoritePage);
   }

   if(callFavoritePage) {
      return <Redirect to="/favorite" />
   }

   return (
      <>
         <SearchContainer>
            <button className="favoritePageBtn" onClick={callFavoritePageHandle}>Favoritos</button>
            <Search type="text"
                  placeholder="Artistas, músicas ou Álbuns..."
                  onChange={(event) => {setSearchTerm(event.target.value)}}
            ></Search>
         </SearchContainer>
         <Container>
            {songs.length === 0 && <p className="loading">Carregando...</p>}
            {songs.filter((val) => {
               if(searchTerm === ''){
                  return val
               } else if(val.album.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return val
               } else if(val.singer.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return val
               } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return val
               }
               }).map((song) => 
                  <Card key={song.id} 
                        song={song}
                        addFavoriteHandler={addFavoriteHandler}
                        soundPlay={soundPlay} 
                        removeFavoriteHandler={removeFavoriteHandler}
                        isPause={isPause}
                        isFavorite={isFavorite}
                  />
               )}
         </Container>
      </>
   );
}