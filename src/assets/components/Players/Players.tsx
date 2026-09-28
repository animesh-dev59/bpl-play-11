import React, { use } from 'react';
import type { Iplayer } from './Types/types';
import AvaillablePlayers from './AvaillablePlayers';

 interface PlayersProps { 
  playersPromise:Promise<Iplayer[]>
 }
const Players = ({playersPromise}):PlayersProps => {
   const players = use(playersPromise)
  // console.log(players,'players')
  console.log(players)

  return (
    <div> 
     <h4>User:{players.length}</h4>

     <AvaillablePlayers players={players}></AvaillablePlayers>
      
    </div>
  );
};

export default Players;