import React from 'react'
import { useState, useRef } from 'react'
import './UseRefHook.css'

export default function UseRefHook() {
    const [images, setImages] = useState(true)
    const [imgURL, setImgURL] = useState("")
    const imageRef = useRef(null)
    const [likes,setLikes]=useState(0)

    const imageDisplay=(e)=>{
        const file=e.target.files[0]
        if(file){
            const preview=URL.createObjectURL(file)
            setImgURL(preview)
            setImages(false)
            setLikes(0)           
        }
    }

    return (
        <div className='maindiv'>
            <h2>Profile Picture</h2>
            <input type="file" ref={imageRef} hidden accept='image/*' onChange={imageDisplay}  />
            {images ?
                <div className="org-img" onClick={() => imageRef.current.click()}>Upload Profile Picture</div>
                : 
                <div className='Updated-img'>

                    <img src={imgURL} alt="Profile"  className='img1' onClick={()=>imageRef.current.click()} />
                    <button type='button' onClick={()=>setLikes(prev=>prev+1)}>👍 {likes}</button>
                </div>

            }



        </div>
    )
}
