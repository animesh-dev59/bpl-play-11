// import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
// import type { Iplayer } from './Types/types';
// import AvaillablePlayers from './AvaillablePlayers';
// import SelectedPllayers from './SelectedPllayers';
// interface PlayersProps{
//   playersPromise : Promise<Iplayer[]> ;
//   coin:number,
//   setCoin:Dispatch<SetStateAction<number>>;
//   selectedPlayers:object[];
//   setSelectedPlayers:Dispatch<SetStateAction<object[]>>
// }

// const Players = ({playersPromise,coin,setCoin,selectedPlayers,setSelectedPlayers} :PlayersProps ) => {
//   // console.log(playersPromise)
//   console.log(coin,setCoin,'from available players');
//   const players = use(playersPromise);
//   const [selectedPlayers,setSelectedPlayers] = useState(<Iplayer[]>([]))
//   // console.log(players)
//   const[buttonType,setButtonType]= useState('available') // available or selected
//   console.log(buttonType);
//   const handleUpdateBtnType = (type : 'available' | 'selected') =>{
//     setButtonType(type);

//   }
//   return (
//     <div className='container mx-auto'>
//        <div className='flex justify-between gap-4 mb-2'>
//           <h2 className='font-bold text-xl '>{buttonType === 'available'? 'Available Players':'Selected Players'}</h2>
//           <div className=''>
//             <button
//             onClick={()=> handleUpdateBtnType('available')}
//              className={`btn ${buttonType === 'available' ? 'btn-success':''} rounded-r-none`}>Available Players</button>
//             <button
//             onClick={()=> handleUpdateBtnType('selected')}
//              className={`btn  ${buttonType === 'selected' ? 'btn-success':''} rounded-l-none`}>Selected</button>
//           </div>
//        </div>
//       <h3>playersLength: {players.length}</h3>
//       {buttonType === 'available' ? <AvaillablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayeres={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/> : (
//         <SelectedPllayers/>
//       )}

//     </div>
//   );
// };

// export default Players;
import React, {
  use,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Iplayer } from "./Types/types";
import AvaillablePlayers from "./AvaillablePlayers";
import SelectedPllayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[]; // অবজেক্টের বদলে সুনির্দিষ্ট Iplayer[] টাইপ ব্যবহার করা ভালো
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const Players = ({
  playersPromise,
  coin,
  setCoin,
}: PlayersProps) => {
  // console.log(coin, setCoin, "from available players");
  const players = use(playersPromise);

  

  const [buttonType, setButtonType] = useState<"available" | "selected">(
    "available",
  ); // available or selected 
  const [selectedPlayers,setSelectedPlayers] = useState<Iplayer[]>([]);
  // console.log(buttonType);

  const handleUpdateBtnType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl ">
          {buttonType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h2>
        <div className="">
          <button
            onClick={() => handleUpdateBtnType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available Players
          </button>
          <button
            onClick={() => handleUpdateBtnType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      <h3>playersLength: {players.length}</h3>
      {buttonType === "available" ? (
        <AvaillablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPllayers  selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers} />
      )}
    </div>
  );
};

export default Players;

// /**
//  * {
//         // players.map(player => {
//         //   return(
//         //     <div>
//         //       <h3>PlayerName: {player.playerName}</h3>
//         //     </div>
//         //   )
//         // })
//       }
//  */


/*** 
 * 
 */