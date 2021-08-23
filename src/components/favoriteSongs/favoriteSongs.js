import { useState } from 'react';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../card/card';
import { Container, ListPageBtn } from './favoriteSongsStyle';

export default function FavoriteSongs(){
   
   const song = useSelector(state => state);
   const [callListPage, setCallListPage] = useState(false);
   const [isPause, setIsPause] = useState(false);
   const dispatch = useDispatch();


   const removeFavoriteHandler = (song) => {
      dispatch({ type: 'REMOVE', song: song});
   }

   function callListPageHandle(){
      setCallListPage(!callListPage);
   }

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
   
   if(callListPage) {
      return <Redirect to="/" />
   }
   if(song.length > 0){
      song.map((song) => song.favorite = true)
   }
   return (
      <>
         <ListPageBtn onClick={callListPageHandle}>Lista de músicas</ListPageBtn>
         <Container>
            {song.length === 0 ? <p className="notFound">Não há favoritos em sua lista.</p> :
               <>
                  {song.map((song) => 
                     <Card key={song.id} 
                           song={song} 
                           soundPlay={soundPlay} 
                           removeFavoriteHandler={removeFavoriteHandler}
                     />
                  )}
               </>
            }
         </Container>
      </>
   );
}