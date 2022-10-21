import React from 'react';
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    // top nav
    <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                src="https://www.snakeriveranimalshelter.org/wp-content/uploads/example-logo.jpg"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
                 />
            </div>
            <div className="items-center h-10 rounded-md flex-grow hidden sm:flex cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>

               <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap "> 
                  
                  <div 
                    onClick={!session ? signIn : signOut} 
                    className="cursor-pointer hover:underline">
                    <p>{session ? `Hello, ${session.user.name}` : "Sign In" }</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                  </div>
                  <div className="relative flex items-center cursor-pointer hover:underline">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
                  </div>
              </div>
        </div>

    {/* // bottom nav */}


    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="cursor-pointer flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer">Prime Video</p>
        <p className="cursor-pointer">Bussines</p>
        <p className="cursor-pointer">Todays Deals</p>
        <p className="cursor-pointer hidden lg:inline-flex">Electronics</p>
        <p className="cursor-pointer hidden lg:inline-flex">Food</p>
        <p className="cursor-pointer hidden lg:inline-flex">Prime</p>
        <p className="cursor-pointer hidden lg:inline-flex">Buy Agin</p>
        <p className="cursor-pointer hidden lg:inline-flex">Shopper Tolkit</p>
        <p className="cursor-pointer hidden lg:inline-flex">Health</p>

        

    </div>

    </header>
  ) 
}
export default Header