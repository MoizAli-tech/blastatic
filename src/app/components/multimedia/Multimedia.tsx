"use client"
import React, { ReactElement } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import PostCss from "../post/post.module.css"

type Props = {
    containerClass?: string,
    children: ReactElement,
    menuState: boolean
    // type: string,
    // size: number,
    // name: string,
    // formik: any
}

const Multimedia = ({ containerClass, children }: Props) => {
    return (
        <div className={`${PostCss.function} ${containerClass} border-2 border-dashed relative border-gray-500 p-4  `}>
            {children}
            <div className={`${PostCss.functionTransition}  absolute top-0 left-0 h-full w-full p-4 bgGray`}>
                <AiFillPlusCircle className={`text-xl`} />
            </div>
        </div>
    )
}

export default Multimedia