// import React, { type Dispatch , type SetStateAction } from 'react'; 
// import type { Iplayer } from './Types/types';

// interface ISelectedPlayersProps { 
//     selectedPlayers:Iplayer[],
//     setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  
// }

// const SelectedPlayers = ({selectedPlayers,setSelectedPlayers }:ISelectedPlayersProps) => {
//   return (
//     <div>
//       {/* console.log(selectedPlayeres ' selected players is components is done '); */}
//      selectedPlayeres.map(playersj = ()=>{
//       <h3>{playersj.}</h3>
//      })
      
//     </div>
//   );
// };

// export default SelectedPlayers;

import React, { type Dispatch, type SetStateAction } from 'react'; 
import type { Iplayer } from './Types/types';
import { FaTrash } from 'react-icons/fa'; // ডিলিট আইকনের জন্য (যদি রিয়্যাক্ট আইকনস ইনস্টল করা থাকে)

interface ISelectedPlayersProps { 
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: ISelectedPlayersProps) => {

  // কোনো প্লেয়ারকে সিলেক্টেড লিস্ট থেকে রিমোভ করার ফাংশন (ঐচ্ছিক কিন্তু দরকারি)
  const handleRemovePlayer = (id: string | number) => {
    const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
    setSelectedPlayers(remainingPlayers);
  };

  return (
    // <div className="container mx-auto my-6 space-y-4">
    //   <h2 className="text-2xl font-bold mb-4">
    //     Selected Players ({selectedPlayers.length}/6) {/* বা তোমার নিয়ম অনুযায়ী ম্যাক্সিমাম লিমিট */}
    //   </h2>

    //   {/* যদি কোনো প্লেয়ার সিলেক্ট করা না থাকে */}
    //   {selectedPlayers.length === 0 ? (
    //     <p className="text-gray-500">No players selected yet.</p>
    //   ) : (
    //     // প্লেয়ারগুলো লিস্ট আকারে দেখানোর জন্য
    //     selectedPlayers.map((player) => (
    //       <div 
    //         key={player.id} 
    //         className="flex items-center justify-between p-4 border border-base-300 rounded-xl shadow-sm bg-base-100"
    //       >
    //         <div className="flex items-center gap-4">
    //           <img 
    //             src={player.playerImg} 
    //             alt={player.playerName} 
    //             className="w-16 h-16 object-cover rounded-lg" 
    //           />
    //           <div>
    //             <h4 className="font-bold text-lg">{player.playerName}</h4>
    //             <p className="text-sm text-gray-500">{player.battingStyle || player.playerType}</p>
    //             <p className="text-xs font-semibold text-primary">Price: ${player.price}</p>
    //           </div>
    //         </div>

    //         {/* রিমোভ বাটন */}
    //         <button 
    //           onClick={() => handleRemovePlayer(player.id)}
    //           className="btn btn-ghost text-error hover:bg-error/10"
    //         >
    //           <FaTrash />
    //         </button>
    //       </div>
    //     ))
    //   )}
    // </div>
    <div> 
      Select players
      { 
        selectedPlayers.map((player) =>{ 
          return player.playerName;

        })}
    </div>
  );
};

export default SelectedPlayers;