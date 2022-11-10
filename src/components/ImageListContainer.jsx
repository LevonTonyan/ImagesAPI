import React from 'react'

import './../App.css'
import ImageItem from './ImageItem'
const ImageListContainer = ({data}) => {
  

  return (
    <div className='imageContainer'>
        {data.map((src,i) => {
           
            return <ImageItem src={src} key={i}></ImageItem>
        })}
    </div>
  )
}

export default ImageListContainer