import React from 'react';

const AvaillablePlayers = ({players}) => { 
  console.log(players,'players from available')
  return (
    <div>
      { 
        players.map((player) => {
          return(
            <div> 
              <h3> PlayerName : {player.playerName}</h3>
            </div>
          )
        } )
      }
      
    </div>
  );
};

export default AvaillablePlayers;