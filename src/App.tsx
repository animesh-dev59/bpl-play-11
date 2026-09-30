import { Suspense, useState } from "react";
import Banner from "./assets/components/Banner"
import Nav from "./assets/components/Nav"
import Players from "./assets/components/Players/Players";
import type { Iplayer } from "./assets/components/Players/Types/types";

const playersFetch = async(): Promise<Iplayer>=>{ 
  const res = await fetch('./data.json')
  const data= await res.json();
  return data;
}

function App() {
  const playersPromise = playersFetch();
  const [coin,setCoin] = useState(5000);
  // console.log(playersPromise) 
  

  return (
  <> 
  <h3>Animesh Rudra Paul</h3> 
  <Nav coin={coin}></Nav>
  <Banner></Banner>
  <Suspense fallback={<p>Loading....</p>}> <Players playersPromise={playersPromise} 
  coin={coin} setCoin={setCoin}/></Suspense>
  </>
  )
}

export default App
