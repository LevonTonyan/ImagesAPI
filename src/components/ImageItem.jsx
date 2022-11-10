import React from 'react'

const ImageItem = ({src}) => {
  return (
    <div className='imageItem'>
        <img src={src} alt="Na"></img>
    </div>
  )
}

export default ImageItem