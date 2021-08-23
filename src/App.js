import { Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import ListSongs from './components/listSongs/listSongs';
import FavoriteSongs from './components/favoriteSongs/favoriteSongs';

function App() {
  return (
    <>
      <Route exact={true} path="/"><ListSongs /></Route>
      <Route path="/favorite"><FavoriteSongs /></Route>
      <GlobalStyle />
    </>
  );
}

export default App;
