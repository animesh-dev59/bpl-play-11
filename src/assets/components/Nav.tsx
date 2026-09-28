import Logo from "../logo.png"

const Nav = () => {
  return (
    <nav className=" bg-red-200 "> 
     <div className="flex justify-between container mx-auto">
       <img src={Logo} alt="" />

      <ul className='flex gap-4 items-center '> 
        <li><a href="">Home</a></li>
        <li><a href="">Fixture</a></li>
        <li><a href="">Player</a></li>
        <li><a href="">Schedu</a></li>
      </ul>
     </div>
    </nav>
  );
};

export default Nav;