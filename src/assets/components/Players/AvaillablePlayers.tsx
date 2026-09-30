import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "./Types/types";
import { FaFlag, FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";
import SelectedPllayers from "./SelectedPlayers";

interface Props {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers:Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvaillablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: Props) => {
  // console.log(players,'players from availavl ')
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {players.map((player: Iplayer, ind = number) => {
        return (
          <PlayerCard
            key={ind}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvaillablePlayers;
