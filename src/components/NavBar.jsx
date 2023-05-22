import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

const NavBar = () => {
    const[showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }
    return(
        <div className="w-full flex justify-between absolute top-0 items-center py-4 px-10 shadow-sm z-50">
            <div className="">
                <h1 className="font-comfortaa text-2xl font-semibold">
                    Trap your Trip
                </h1>
            </div>
            <div className="lg:hidden" onClick={handleMenuClick}><IconButton>{showMenu ? <CloseIcon sx={{color: 'white', fontSize: '1.7rem'}}/> : <MenuIcon sx={{color: 'white', fontSize: '1.7rem'}}/>}</IconButton></div>
            <div className={`font-comfortaa  lg:block ${showMenu ? 'flex flex-col items-center absolute top-[100%] left-0 bg-zinc-600 h-[50vh] rounded-md w-full justify-around shadow-lg shadow-zinc-600' : 'hidden'}`}>
                {[
                    ['Trending Places', '/places'],
                    ['Hot Itineraries', '/itineraries'],
                    ['Who are we?', '/about-us'],
                    ['Add Itinerary', '/add-itinerary'],
                ].map(([name, url], index) => {
                    return <a key={index} href={url} className="p-2 cursor-pointer hover:bg-zinc-100 hover:opacity-70 hover:text-blue-500 rounded-md ease-in-out duration-200">
                        {name}
                    </a>
                })}
            </div>
            <div>
                <button className="p-2 cursor-pointer bg-blue-500 text-white rounded-md font-comfortaa hover:bg-blue-600 ease-in-out duration-200">
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default NavBar;