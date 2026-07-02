import React from 'react'
import { useState, useRef } from 'react'
import './UseRefHook.css'

export default function UseRefHook() {
    const [images, setImages] = useState(true)
    const [imgURL, setImgURL] = useState("")
    const imageRef = useRef(0)



    return (
        <div className='maindiv'>
            <h2>Profile Picture</h2>
            <input type="file" ref={imageRef} hidden />
            {images ?
                <div className="org-img" onClick={() => imageRef.current.click()}></div>
                : <img src="" alt="" />
            }



        </div>
    )
}
