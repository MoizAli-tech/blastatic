import React from 'react';
import Image from 'next/image';
import { IoCreateOutline } from "react-icons/io5"
import NavCss from "./Navbar.module.css"
import Post from '../post/Post';
import PostWrapper from '../post/PostWrapper';


const Navbar = () => {




    return (
        <div className={`${NavCss.navbar} relative p-2 h-screen `}>

            <Image className="mx-auto" src="/logo3.png" height={40} width={40} alt="blastic logo" />
            <PostWrapper />

        </div>
    )
}

export default Navbar