import React from 'react'
import Navbar from '../components/navbar/Navbar'

const page = () => {
    return (
        <div className={`flex`}>
            <Navbar />
            <div className={`m-4`}>
                Hello dear
            </div>
        </div>
    )
}

export default page