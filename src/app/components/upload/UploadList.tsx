import React from 'react'
import Upload from './Upload'

type Props = {
    list: JSX.Element[]
}

const UploadList = ({ list }: Props) => {

    return (
        <div>
            <ul>
                {
                    list.map((box, i) => (
                        <li key={i}>{box}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default UploadList