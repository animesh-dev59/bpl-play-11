import { Suspense } from "react";
import Banner from "./assets/components/Banner"
import Nav from "./assets/components/Nav"
import Players from "./assets/components/Players/Players";
import type { Iplayer } from "./assets/components/Players/Types/types";


 const playersFeatch = async(): Promise<Iplayer[]>=>{ 
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
 }
 const playersPromise = playersFeatch();

function App() {
  // console.log(playersPromise) 
  

  return (
   <>   
    
  <Nav/>
  <Banner></Banner>
  <Suspense fallback={<p>Loading....</p>}> 
    <Players playersPromise={playersPromise}></Players>
  </Suspense>

     <h1 className="text-5xl text-red-500"> React is my best</h1>
     <button className="btn btn-xl">Xlarge</button>
   </>
  )
}

export default App
