import React, { ReactElement } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import PostCss from "../post/post.module.css"

type Props = {
    containerClass?: string,
    children: ReactElement,
    type?: string,
    size?: number,
    name: string,
    formik: any,
    text: string
}

const Upload = ({ formik, containerClass, children, type, size, name, text }: Props) => {
    return (
        <div className={`${PostCss.function} ${containerClass}  relative`}>
            <div className='flex justify-center items-center'>
                {children}
                {text}
            </div>

            <div className={` absolute top-0 left-0 h-full w-full p-4 `}>

                <input
                    name={name}
                    type="file"
                    onChange={formik.handleChange}
                    accept={type}
                    size={size}
                    className={`absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer`} />
            </div>
        </div>
    )
}

export default Upload