"use client"
import React, { useState } from 'react'
import Post from "./Post"
import { IoCreateOutline } from "react-icons/io5"
import NavCss from "../navbar/Navbar.module.css"


const PostWrapper = () => {
    const [postVisible, setPostVisible] = useState<boolean>(false)

    return (
        <div>

            <div onClick={() => setPostVisible(true)} className={`mt-2 iconWrapper  ${NavCss.navIcons}`}>
                <IoCreateOutline />
            </div>
            {postVisible ? <Post setPostVisible={setPostVisible} /> : <></>}

        </div>
    )
}

export default PostWrapper