// import React from 'react';
// import { FaFlag, FaUser } from 'react-icons/fa';
// import type { Iplayer } from './Types/types';

// const PlayerCard = ({player}:{player:Iplayer}) => {
//   return (
//                 <div className="card bg-base-100  shadow-sm">
//   <figure>
//     <img
//       src={player.playerImg} alt="Player" />
//   </figure>
//   <div className="card-body space-y-3">
    
//     <h2 className="card-title"><FaUser />  {player.playerName}</h2>
//     <div className='flex justify-between gap-4'> 
//       <div className='flex items-center justify-center gap-2'>
//         <FaFlag /> 
//       <p> {player.origin}</p>
//       </div>
//       <button>{player.playerType}</button>

//     </div>
//     <div className='divider'></div>
//     <h2 className='font-bold '>Rating</h2> 
//     <div className='flex justify-between gap-4  items-center'>
      
//       <p className='font-bold'> {player.price}</p>
//       <button className='btn'> chose Player</button>
//       </div>
//   </div>
// </div>
//   );
// };

// export default PlayerCard; 

// ------------------------------------- 
import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaFlag, FaUser, FaStar } from 'react-icons/fa';
import type { Iplayer } from './Types/types';
import { toast } from 'react-toastify';
interface Props1{
  player :Iplayer ;
  coin:number,
  setCoin:Dispatch<SetStateAction<number>>;
  selectedPlayers:Iplayer[],
  setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
   player,coin,setCoin,
   selectedPlayers,
   setSelectedPlayers}:Props1) => { 
  const [isSelected, setIsSelected] = useState(false);
  // console.log(isSelected,setIsSelected,'isSelected,setIsSelected');
  console.log(coin,setCoin,'from card');

   const handleSelectPlayer = ()=>{ 
    setIsSelected(true); 
    const newCoinPrice = coin - player.price;
     if(newCoinPrice >= 0){
       setCoin(newCoinPrice);
       toast.success(`${player.playerName} is purchased successfully`)
     }else{ 
      toast.error('Coin is not enought to purchase ')
     }

     // selected players Logic 
     setSelectedPlayers([...selectedPlayers,player])

   }
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Player Image with a subtle zoom effect on hover */}
      <figure className="relative h-56 w-full overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName || "Player"}
          className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-primary font-semibold shadow-md">
            {player.playerType}
          </span>
        </div>
      </figure>

      <div className="card-body p-6 space-y-4">
        {/* Player Name */}
        <h2 className="card-title text-xl font-bold tracking-tight text-base-content flex items-center gap-2.5">
          <FaUser className="text-primary text-lg" />
          <span className="truncate">{player.playerName}</span>
        </h2>

        {/* Origin / Country */}
        <div className="flex items-center justify-between text-base-content/70 text-sm">
          <div className="flex items-center gap-2">
            <FaFlag className="text-secondary" />
            <span className="font-medium">{player.origin}</span>
          </div>
        </div>

        <div className="divider my-0"></div>

        {/* Rating Section (If applicable, or stats placeholder) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-base-content/80 flex items-center gap-1">
              <FaStar className="text-warning" /> Rating / Skills
            </span> 
             <p>{player.battingStyle}</p>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-2">
          <div className='flex justify-center items-center'>
            <span className="text-xs text-base-content/60 block">Price</span>
            <span className="text-lg font-extrabold text-primary">${player.price}</span>
          </div>
          <button
          onClick={()=> handleSelectPlayer()}
           className={`btn btn-primary btn-sm px-5 shadow-md hover:scale-105 transition-transform`}
          //  disabled={isSelected === true ? true : false}
          //  disabled={isSelected ? true : false}
           disabled={isSelected}
           >  
            { isSelected === true ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;